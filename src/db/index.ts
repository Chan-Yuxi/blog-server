import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const {
  "db.mysql.username": user,
  "db.mysql.password": password,
  "db.mysql.host": host,
  "db.mysql.database": database,
} = process.env;

function connect() {
  return mysql.createPool({
    user,
    password,
    host,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });
}

const pool = connect();

async function call<T>(
  method: "query" | "execute",
  sql: string,
  values?: any
): Promise<T | null> {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection[method](sql, values);
    return result as T;
  } catch (e) {
    console.error(e);
    return null;
  } finally {
    pool.releaseConnection(connection);
  }
}

export const query = <T>(sql: string, values?: any) =>
  call<T>("query", sql, values);

export const execute = <T>(sql: string, values?: any) =>
  call<T>("execute", sql, values);
