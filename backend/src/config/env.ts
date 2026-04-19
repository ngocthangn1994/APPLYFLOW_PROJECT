import { config } from "dotenv";

config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || "10000",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  MONGODB_URI: process.env.MONGODB_URI || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  OPENAI_MODEL: process.env.OPENAI_MODEL || "gpt-4.1-mini",
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
};
