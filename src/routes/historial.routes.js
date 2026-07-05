import { Router } from "express";

import { listarHistorial } from "../controladores/historial.controller.js";

const router = Router();

router.get("/:id", listarHistorial);

export default router;
