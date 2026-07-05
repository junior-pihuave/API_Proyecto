import { conmysql } from "../db.js";

export const obtenerJuegos = async () => {
  const [rows] = await conmysql.query(
    `

SELECT

j.id,

j.nombre,

j.descripcion,

c.nombre categoria

FROM juegos j

INNER JOIN categorias c

ON c.id=j.categoria_id

`,
  );

  return rows;
};

export const obtenerJuego = async (id) => {
  const [rows] = await conmysql.query(
    `

SELECT

j.id,

j.nombre,

j.descripcion,

c.nombre categoria

FROM juegos j

INNER JOIN categorias c

ON c.id=j.categoria_id

WHERE j.id=?

`,

    [id],
  );

  return rows[0];
};
