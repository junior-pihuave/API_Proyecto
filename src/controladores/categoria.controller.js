import {
  obtenerCategorias,
  obtenerCategoria,
} from "../models/categoria.model.js";

export const listarCategorias = async (req, res) => {
  try {
    const categorias = await obtenerCategorias();

    res.json(categorias);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const categoriaPorId = async (req, res) => {
  try {
    const categoria = await obtenerCategoria(req.params.id);

    if (!categoria) {
      return res.status(404).json({
        mensaje: "Categoría no encontrada",
      });
    }

    res.json(categoria);
  } catch (error) {
    res.status(500).json(error);
  }
};
