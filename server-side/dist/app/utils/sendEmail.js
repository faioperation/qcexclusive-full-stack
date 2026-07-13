"use strict";
/**
 * Transactional email entry point
 * SMTP enabled
 * Resend kept for future usage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
// SMTP ACTIVE
var smtp_service_1 = require("../services/email/smtp.service");
Object.defineProperty(exports, "sendEmail", { enumerable: true, get: function () { return smtp_service_1.sendEmailViaSMTP; } });
// RESEND TEMPORARILY DISABLED
// export { sendEmailViaResend as sendEmail }
// from "../services/email/resendEmail.service";
