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

export const pool = connect();
