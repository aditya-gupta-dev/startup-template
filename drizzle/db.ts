import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  host: process.env.HOST!,
  database: process.env.DB_NAME!,
  port: Number.parseInt(process.env.PORT ?? "13090"),
  user: process.env.USERNAME!,
  password: process.env.PASSWORD!,
  idleTimeoutMillis: 5000,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.CERT_DB ?? ""
  }
});

export const db = drizzle(pool);
