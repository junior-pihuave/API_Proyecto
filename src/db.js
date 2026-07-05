import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Asegúrate de cargar las variables de entorno

export const conmysql = createPool({
  host: process.env.BD_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // <--- Esto lee el valor desde .env
  database: process.env.BD_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
