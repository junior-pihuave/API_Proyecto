import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config.js";

import { crearUsuario, buscarCorreo } from "../models/usuario.model.js";

export const registro = async (req, res) => {
  try {
    const {
      nombre,

      correo,

      password,
    } = req.body;

    const existe = await buscarCorreo(correo);

    if (existe) {
      return res.status(400).json({
        mensaje: "El correo ya existe",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    await crearUsuario({
      nombre,

      correo,

      password: hash,
    });

    res.json({
      mensaje: "Usuario registrado",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const {
      correo,

      password,
    } = req.body;

    const usuario = await buscarCorreo(correo);

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    const correcto = await bcrypt.compare(
      password,

      usuario.password,
    );

    if (!correcto) {
      return res.status(401).json({
        mensaje: "Contraseña incorrecta",
      });
    }

    const token = jwt.sign(
      {
        id: usuario.id,

        correo: usuario.correo,
      },

      config.JWT_SECRET,

      {
        expiresIn: "24h",
      },
    );

    res.json({
      token,

      usuario: {
        id: usuario.id,

        nombre: usuario.nombre,

        correo: usuario.correo,

        monedas: usuario.monedas,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};
