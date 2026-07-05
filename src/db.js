import { createPool } from "mysql2/promise";
import config from "./config.js"; // Importamos el archivo de configuración

export const conmysql = createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  port: config.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
