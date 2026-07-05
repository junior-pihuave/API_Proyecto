import { obtenerRanking } from "../models/ranking.model.js";

export const listarRanking = async (req, res) => {
  try {
    const ranking = await obtenerRanking();

    res.json(ranking);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};
