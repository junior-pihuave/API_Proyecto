import { conmysql } from "../db.js";

// Actualizar ranking
export const actualizarRanking = async (usuario_id, monedas) => {
  const [rows] = await conmysql.query(
    "SELECT * FROM ranking WHERE usuario_id=?",

    [usuario_id],
  );

  if (rows.length === 0) {
    await conmysql.query(
      `
            INSERT INTO ranking
            (usuario_id, monedas)
            VALUES (?,?)
            `,

      [usuario_id, monedas],
    );
  } else {
    await conmysql.query(
      `
            UPDATE ranking
            SET monedas=?
            WHERE usuario_id=?
            `,

      [monedas, usuario_id],
    );
  }
};

// Obtener ranking
export const obtenerRanking = async () => {
  const [rows] = await conmysql.query(
    `
        SELECT

            u.nombre,
            r.monedas

        FROM ranking r

        INNER JOIN usuarios u

        ON u.id=r.usuario_id

        ORDER BY r.monedas DESC

        LIMIT 20

        `,
  );

  return rows;
};
