import nodemailer from "nodemailer";
import ejs from "ejs";
import fs from "fs";
import path from "path";
import config from "../../config";

type SendEmailParams = {
  to: string;
  subject: string;
  tempName: string;
  tempData?: Record<string, unknown>;
};

function resolveTemplatePath(tempName: string): string {
  const file = `${tempName}.ejs`;

  const candidates = [
    path.join(__dirname, "..", "templates", file),
    path.join(process.cwd(), "src", "app", "utils", "templates", file),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Template not found: ${file}`);
}

export async function sendEmailViaSMTP(
  params: SendEmailParams
) {
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: Number(config.SMTP_PORT),
    secure: true,
    auth: {
      user: config.SMTP_FROM,
      pass: config.SMTP_PASS,
    },
  });

  const tempPath = resolveTemplatePath(params.tempName);

  const html = await ejs.renderFile(tempPath, {
    ...(params.tempData ?? {}),
    subject: params.subject,
  });

  const info = await transporter.sendMail({
    from: `"${config.SMTP_USER}" <${config.SMTP_FROM}>`,
    to: params.to,
    subject: params.subject,
    html,
  });

  return {
    messageId: info.messageId,
  };
}