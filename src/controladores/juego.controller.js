import { obtenerJuegos, obtenerJuego } from "../models/juego.model.js";

export const listarJuegos = async (req, res) => {
  const juegos = await obtenerJuegos();

  res.json(juegos);
};

export const juegoPorId = async (req, res) => {
  const juego = await obtenerJuego(req.params.id);

  if (!juego) {
    return res.status(404).json({
      mensaje: "Juego no encontrado",
    });
  }

  res.json(juego);
};
