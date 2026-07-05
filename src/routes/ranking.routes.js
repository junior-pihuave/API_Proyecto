import { Router } from "express";

import { listarRanking } from "../controladores/ranking.controller.js";

const router = Router();

router.get("/", listarRanking);

export default router;
