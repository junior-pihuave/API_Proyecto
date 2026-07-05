import { guardarPartida, historialUsuario } from "../models/partida.model.js";

import { obtenerSaldo, actualizarMonedas } from "../models/usuario.model.js";

import { guardarHistorial } from "../models/historial.model.js";

import { actualizarRanking } from "../models/ranking.model.js";

export const jugar = async (req, res) => {
  try {
    const {
      usuario_id,

      juego_id,

      apuesta,

      multiplicador,

      premio,

      resultado,
    } = req.body;

    // Buscar usuario
    const usuario = await obtenerSaldo(usuario_id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    const saldo_anterior = usuario.monedas;

    // Validar saldo
    if (saldo_anterior < apuesta) {
      return res.status(400).json({
        mensaje: "Saldo insuficiente",
      });
    }

    // Calcular saldo final
    const saldo_actual = saldo_anterior - apuesta + premio;

    // Datos de la partida
    const partida = {
      usuario_id,

      juego_id,

      apuesta,

      multiplicador,

      premio,

      resultado,

      saldo_anterior,

      saldo_actual,
    };

    // Guardar partida
    await guardarPartida(partida);

    // Actualizar monedas
    await actualizarMonedas(
      usuario_id,

      saldo_actual,
    );

    // Guardar historial
    await guardarHistorial(
      usuario_id,

      `${resultado} | Juego ${juego_id} | Premio ${premio}`,
    );

    // Actualizar ranking
    await actualizarRanking(
      usuario_id,

      saldo_actual,
    );

    res.json({
      mensaje: "Partida guardada correctamente",

      saldo_actual,

      premio,

      resultado,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      mensaje: "Error interno",

      error: error.message,
    });
  }
};

export const historial = async (req, res) => {
  try {
    const partidas = await historialUsuario(req.params.id);

    res.json(partidas);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener historial",

      error: error.message,
    });
  }
};
