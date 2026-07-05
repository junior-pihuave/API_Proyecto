import { obtenerHistorial } from "../models/historial.model.js";

export const listarHistorial = async (req, res) => {
  try {
    const historial = await obtenerHistorial(req.params.id);

    res.json(historial);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};
