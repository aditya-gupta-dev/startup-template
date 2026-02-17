import { Pool } from "pg";
import { readFileSync } from "fs";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  host: process.env.HOST!,
  database: process.env.DB_NAME!,
  port: Number.parseInt(process.env.PORT ?? "13090"),
  user: process.env.USERNAME!,
  password: process.env.PASSWORD!,
  idleTimeoutMillis: 1000,
  ssl: {
    rejectUnauthorized: false,
    ca: readFileSync(process.env.CERT_FILE ?? "ca.pem").toString()
  }
});

export const db = drizzle(pool);
