export type SendEmailAttachment = {
  fileName: string;
  content: Buffer | string;
  contentType: string;
};

export type SendEmailParams = {
  to: string;
  subject: string;
  tempName: string;
  tempData?: Record<string, unknown>;
  attachments?: SendEmailAttachment[];
  /** Overrides config RESEND_FROM when set */
  from?: string;
  /** Resend idempotency key — safe retries without duplicate sends */
  idempotencyKey?: string;
};

export type SendEmailResult = {
  /** Resend email id */
  messageId: string;
};
