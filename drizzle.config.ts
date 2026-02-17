import { defineConfig } from "drizzle-kit";
import { readFileSync } from "fs";

export default defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/schema.ts",
  out: "db-queries",
  dbCredentials: {
    host: process.env.HOST!,
    database: process.env.DB_NAME!,
    port: Number.parseInt(process.env.PORT ?? "13090"),
    user: process.env.USERNAME!,
    password: process.env.PASSWORD!,
    ssl: {
      rejectUnauthorized: false,
      ca: readFileSync(process.env.CERT_FILE ?? "ca.pem").toString()
    }
  
  }
})
