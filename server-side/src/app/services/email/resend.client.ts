import { Resend } from "resend";
import config from "../../config";

let client: Resend | null = null;

/**
 * Singleton Resend client. Throws if RESEND_API_KEY is missing (fail fast at send time).
 */
export function getResendClient(): Resend {
  const apiKey = config.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured. Set it in your environment (e.g. .env)."
    );
  }
  if (!client) {
    client = new Resend(apiKey);
  }
  return client;
}
