import { Router } from "express";

import {
  listarUsuarios,
  obtenerUsuario,
  editarUsuario,
  borrarUsuario,
} from "../controladores/usuario.controller.js";

const router = Router();

router.get("/", listarUsuarios);

router.get("/:id", obtenerUsuario);

router.put("/:id", editarUsuario);

router.delete("/:id", borrarUsuario);

export default router;
