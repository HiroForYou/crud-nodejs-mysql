import { createPool } from "mysql2/promise";
import mysql from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config();
console.log("process.env.DB_PASSWORD,", process.env.DB_PASSWORD)

export const pool = await mysql.createConnection(process.env.DB_URL);


export const poo = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  database: process.env.DB_DATABASE,
  ssl: {
    // DO NOT DO THIS
    // set up your ca correctly to trust the connection
    rejectUnauthorized: false,
  },
});
