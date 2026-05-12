import OpenAI from 'openai';
import config from '../../config';

let client: OpenAI | null = null;

/**
 * Singleton OpenAI client. Throws if OPENAI_API_KEY is missing.
 */
export function getOpenAIClient(): OpenAI {
  const apiKey = config.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not configured. Set it in your environment (e.g. .env)."
    );
  }
  if (!client) {
    client = new OpenAI({
      apiKey,
    });
  }
  return client;
}

export interface AIClassificationResult {
  classification: 'Interested' | 'NotInterested' | 'Neutral' | 'MeetingRequest' | 'PricingRequest' | 'Spam';
  confidence: number;
  reasoning: string;
}

export interface AIReplyGenerationResult {
  reply: string;
  classification: AIClassificationResult;
}

/**
 * Classify email reply using GPT-4
 */
export async function classifyEmailReply(
  emailBody: string,
  subject: string,
  leadName: string
): Promise<AIClassificationResult> {
  const openai = getOpenAIClient();
  
  const prompt = `You are an expert email response classifier for a B2B sales outreach system.

Classify the following email reply into exactly one of these categories:
- Interested: Lead shows positive interest, wants to learn more, or agrees to talk
- NotInterested: Lead explicitly says they're not interested, asks to be removed, or declines
- Neutral: Lead acknowledges receipt but doesn't show clear interest or disinterest
- MeetingRequest: Lead specifically asks to schedule a meeting or call
- PricingRequest: Lead asks about pricing, costs, or payment options
- Spam: Obvious spam, auto-responder, or irrelevant content

Email Details:
- From: ${leadName}
- Subject: ${subject}
- Body: ${emailBody}

Respond with a JSON object:
{
  "classification": "category",
  "confidence": 0.95,
  "reasoning": "Brief explanation"
}

Confidence should be between 0.0 and 1.0.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert email response classifier. Always respond with valid JSON only."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.1,
      max_tokens: 200,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const result = JSON.parse(content) as AIClassificationResult;
    
    // Validate classification
    const validClassifications = ['Interested', 'NotInterested', 'Neutral', 'MeetingRequest', 'PricingRequest', 'Spam'];
    if (!validClassifications.includes(result.classification)) {
      throw new Error(`Invalid classification: ${result.classification}`);
    }

    return result;
  } catch (error) {
    console.error('OpenAI classification error:', error);
    // Fallback to neutral classification
    return {
      classification: 'Neutral',
      confidence: 0.5,
      reasoning: 'Classification failed, defaulting to neutral'
    };
  }
}

/**
 * Generate AI reply suggestion based on classification
 */
export async function generateAIReply(
  emailBody: string,
  subject: string,
  leadName: string,
  classification: AIClassificationResult,
  campaignName?: string
): Promise<string> {
  const openai = getOpenAIClient();
  
  const replyInstructions = {
    Interested: "Write a warm, professional reply that acknowledges their interest and suggests next steps. Keep it concise and friendly.",
    NotInterested: "Write a polite, professional reply that respects their decision and leaves the door open for future contact.",
    Neutral: "Write a brief, professional reply that acknowledges their response and gently encourages engagement.",
    MeetingRequest: "Write a reply that confirms interest in meeting and asks for their availability or suggests specific times.",
    PricingRequest: "Write a reply that acknowledges their pricing question and explains that pricing details will be shared in a call or email.",
    Spam: "Do not generate a reply for spam messages."
  };

  if (classification.classification === 'Spam') {
    return '';
  }

  const instruction = replyInstructions[classification.classification];
  const companyContext = campaignName ? ` from ${campaignName}` : '';

  const prompt = `You are a professional sales assistant writing an email reply.

Context:
- Company: ${companyContext}
- Lead Name: ${leadName}
- Original Subject: ${subject}
- Lead's Email: ${emailBody}
- Classification: ${classification.classification} (${classification.reasoning})

Instructions: ${instruction}

Requirements:
- Keep the reply under 150 words
- Be professional but friendly
- Include a clear call to action when appropriate
- Do not mention AI or automation
- Sign off with a professional closing

Write only the email body, no subject or formatting.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional sales assistant. Write concise, effective email replies."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    return completion.choices[0]?.message?.content?.trim() || '';
  } catch (error) {
    console.error('OpenAI reply generation error:', error);
    return '';
  }
}

/**
 * Process email reply with classification and reply generation
 */
export async function processEmailReply(
  emailBody: string,
  subject: string,
  leadName: string,
  campaignName?: string
): Promise<AIReplyGenerationResult> {
  const classification = await classifyEmailReply(emailBody, subject, leadName);
  const reply = await generateAIReply(emailBody, subject, leadName, classification, campaignName);
  
  return {
    reply,
    classification
  };
}
