import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  // Agrega estas líneas que faltaban:
  DB_HOST: process.env.BD_HOST,
  DB_DATABASE: process.env.BD_DATABASE,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
};
