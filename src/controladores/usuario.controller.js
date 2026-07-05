import {
  buscarId,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} from "../models/usuario.model.js";

// GET
export const listarUsuarios = async (req, res) => {
  const usuarios = await obtenerUsuarios();

  res.json(usuarios);
};

// GET ID
export const obtenerUsuario = async (req, res) => {
  const usuario = await buscarId(req.params.id);

  if (!usuario) {
    return res.status(404).json({
      mensaje: "Usuario no encontrado",
    });
  }

  res.json(usuario);
};

// PUT
export const editarUsuario = async (req, res) => {
  await actualizarUsuario(
    req.params.id,

    req.body,
  );

  res.json({
    mensaje: "Usuario actualizado",
  });
};

// DELETE
export const borrarUsuario = async (req, res) => {
  await eliminarUsuario(req.params.id);

  res.json({
    mensaje: "Usuario eliminado",
  });
};
