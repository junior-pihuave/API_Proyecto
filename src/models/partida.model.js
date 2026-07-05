import { conmysql } from "../db.js";

export const guardarPartida = async (partida) => {
  const sql = `
        INSERT INTO partidas
        (
            usuario_id,
            juego_id,
            apuesta,
            multiplicador,
            premio,
            resultado,
            saldo_anterior,
            saldo_actual
        )
        VALUES(?,?,?,?,?,?,?,?)
    `;

  const [resultado] = await conmysql.query(sql, [
    partida.usuario_id,

    partida.juego_id,

    partida.apuesta,

    partida.multiplicador,

    partida.premio,

    partida.resultado,

    partida.saldo_anterior,

    partida.saldo_actual,
  ]);

  return resultado;
};

export const historialUsuario = async (id) => {
  const [rows] = await conmysql.query(
    `

        SELECT

        p.*,

        j.nombre juego

        FROM partidas p

        INNER JOIN juegos j

        ON j.id=p.juego_id

        WHERE usuario_id=?

        ORDER BY fecha DESC

        `,

    [id],
  );

  return rows;
};
