import fs from "fs";
import path from "path";
import ejs from "ejs";
import config from "../../config";
import { getResendClient } from "./resend.client";
import type { SendEmailAttachment, SendEmailParams, SendEmailResult } from "./email.types";

function resolveTemplatePath(tempName: string): string {
  const file = `${tempName}.ejs`;
  const candidates = [
    path.join(__dirname, "..", "..", "utils", "templates", file),
    path.join(process.cwd(), "src", "app", "utils", "templates", file),
    path.join(process.cwd(), "dist", "app", "utils", "templates", file),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  throw new Error(
    `EJS template "${file}" not found. Checked: ${candidates.join(", ")}`
  );
}

async function renderEjsTemplate(
  tempName: string,
  tempData: Record<string, unknown> | undefined,
  subject: string
): Promise<string> {
  const tempPath = resolveTemplatePath(tempName);
  const html = await ejs.renderFile(tempPath, {
    ...(tempData ?? {}),
    subject,
  });
  return html;
}

function toResendAttachments(
  attachments: SendEmailAttachment[] | undefined
):
  | {
      filename: string;
      content: string | Buffer;
      contentType?: string;
    }[]
  | undefined {
  if (!attachments?.length) {
    return undefined;
  }
  return attachments.map((a) => ({
    filename: a.fileName,
    content: a.content,
    contentType: a.contentType,
  }));
}

function resolveFromAddress(explicit?: string): string {
  const from = (explicit ?? config.RESEND_FROM ?? "").trim();
  if (!from) {
    throw new Error(
      'RESEND_FROM is not configured. Use a verified sender (e.g. "App Name <onboarding@resend.dev>").'
    );
  }
  return from;
}

type ResendErrorShape = {
  message?: string;
  name?: string;
  statusCode?: number | null;
};

function formatResendError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "object" && error !== null) {
    const e = error as ResendErrorShape;
    const parts = [e.name, e.message].filter(Boolean);
    if (parts.length) {
      return parts.join(": ");
    }
    return JSON.stringify(error);
  }
  return String(error);
}

/**
 * Renders an EJS template and sends HTML email via Resend.
 * Throws on any failure so BullMQ / callers can retry.
 */
export async function sendEmailViaResend(
  params: SendEmailParams
): Promise<SendEmailResult> {
  const { to, subject, tempName, tempData, attachments, from: fromOverride, idempotencyKey } =
    params;

  const html = await renderEjsTemplate(tempName, tempData, subject);
  const from = resolveFromAddress(fromOverride);

  const resend = getResendClient();
  const sendOptions = idempotencyKey
    ? { idempotencyKey }
    : undefined;

  const { data, error } = await resend.emails.send(
    {
      from,
      to,
      subject,
      html,
      attachments: toResendAttachments(attachments),
    },
    sendOptions ?? {}
  );

  if (error) {
    throw new Error(`Resend error: ${formatResendError(error)}`);
  }

  const messageId = data?.id;
  if (!messageId) {
    throw new Error("Resend returned success but no email id in response.");
  }

  return { messageId };
}
