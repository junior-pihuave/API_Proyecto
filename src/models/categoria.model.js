import { conmysql } from "../db.js";

export const obtenerCategorias = async () => {
  const [rows] = await conmysql.query(
    "SELECT * FROM categorias ORDER BY nombre",
  );

  return rows;
};

export const obtenerCategoria = async (id) => {
  const [rows] = await conmysql.query(
    "SELECT * FROM categorias WHERE id=?",

    [id],
  );

  return rows[0];
};
