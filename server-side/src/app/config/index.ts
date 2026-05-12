import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
  JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES,
  JWT_REFRESH_TOKEN: process.env.JWT_REFRESH_TOKEN,
  JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES,
  /** Resend API (transactional email) */
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  /** Verified sender, e.g. "QC Exclusive <mail@yourdomain.com>" */
  RESEND_FROM: process.env.RESEND_FROM,

  /** Gmail IMAP (inbox sync) — still uses app password, not Resend */
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_FROM: process.env.SMTP_FROM,
  SMTP_PASS: process.env.SMTP_PASS,
  FRONTEND_URL: process.env.FRONTEND_URL,
  RedisUserName: process.env.RedisUserName,
  RedisPassword: process.env.RedisPassword,
  RedisHost: process.env.RedisHost,
  RedisPort: process.env.RedisPort,
  APIFY_TOKEN: process.env.APIFY_TOKEN,
  /** OpenAI API for AI classification and reply generation */
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  /** Calendly API for meeting booking */
  CALENDLY_API_KEY: process.env.CALENDLY_API_KEY,
  CALENDLY_WEBHOOK_SECRET: process.env.CALENDLY_WEBHOOK_SECRET,
  /** External API URLs */
  CALENDLY_API_BASE_URL: process.env.CALENDLY_API_BASE_URL || "https://api.calendly.com",
  APIFY_API_BASE_URL: process.env.APIFY_API_BASE_URL || "https://api.apify.com",
  N8N_WEBHOOK_URL: process.env.N8N_WEBHOOK_URL,
  /** Meeting configuration */
  DEFAULT_MEETING_LINK: process.env.DEFAULT_MEETING_LINK || "https://meet.google.com/qcx-clusive",
  /** Development URLs */
  DEV_FRONTEND_URL: process.env.DEV_FRONTEND_URL || "http://localhost:3000",
  DEV_VITE_URL: process.env.DEV_VITE_URL || "http://localhost:5173",
  PRODUCTION_FRONTEND_URL: process.env.PRODUCTION_FRONTEND_URL || "https://qcexclusive-full-stack.vercel.app",
};