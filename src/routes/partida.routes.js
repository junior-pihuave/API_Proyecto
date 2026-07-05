import { Router } from "express";

import { jugar, historial } from "../controladores/partida.controller.js";

const router = Router();

router.post("/", jugar);

router.get("/historial/:id", historial);

export default router;
