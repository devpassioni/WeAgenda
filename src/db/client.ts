import {Pool} from "pg";
import { configDotenv } from "dotenv";

configDotenv()
export const pool = new Pool({
    host: process.env.DATABASE_host,
    user: process.env.DATABASE_user,
    password: process.env.DATABASE_password,
    port: Number(process.env.DATABASE_port),
    database: "scheduler",
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    maxLifetimeSeconds: 60,
})

 