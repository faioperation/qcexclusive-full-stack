/**
 * Transactional email entry point
 * SMTP enabled
 * Resend kept for future usage
 */

export type {
  SendEmailParams,
  SendEmailResult,
  SendEmailAttachment,
} from "../services/email/email.types";

// SMTP ACTIVE
export { sendEmailViaSMTP as sendEmail } 
from "../services/email/smtp.service";

// RESEND TEMPORARILY DISABLED
// export { sendEmailViaResend as sendEmail }
// from "../services/email/resendEmail.service";