import { conmysql } from "../db.js";

// Guardar historial
export const guardarHistorial = async (usuario_id, descripcion) => {
  const sql = `
        INSERT INTO historial
        (usuario_id, descripcion)
        VALUES (?,?)
    `;

  const [resultado] = await conmysql.query(sql, [usuario_id, descripcion]);

  return resultado;
};

// Obtener historial por usuario
export const obtenerHistorial = async (usuario_id) => {
  const [rows] = await conmysql.query(
    `
        SELECT
            h.id,
            h.descripcion,
            h.fecha
        FROM historial h
        WHERE h.usuario_id=?
        ORDER BY h.fecha DESC
        `,

    [usuario_id],
  );

  return rows;
};
