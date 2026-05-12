/**
 * Transactional email entry point (Resend + EJS).
 * Re-exports the service so existing imports (`../../utils/sendEmail`) stay stable.
 */
export type {
  SendEmailParams,
  SendEmailResult,
  SendEmailAttachment,
} from "../services/email/email.types";

export { sendEmailViaResend as sendEmail } from "../services/email/resendEmail.service";
