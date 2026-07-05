import { Router } from "express";

import { listarJuegos, juegoPorId } from "../controladores/juego.controller.js";

const router = Router();

router.get("/", listarJuegos);

router.get("/:id", juegoPorId);

export default router;
