import { Router } from "express";

import {
  listarCategorias,
  categoriaPorId,
} from "../controladores/categoria.controller.js";

const router = Router();

router.get("/", listarCategorias);

router.get("/:id", categoriaPorId);

export default router;
