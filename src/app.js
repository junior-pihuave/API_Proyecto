import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.routes.js";
import authRoutes from "./routes/auth.js";
import categoriaRoutes from "./routes/categoria.routes.js";
import juegoRoutes from "./routes/juego.routes.js";
import partidaRoutes from "./routes/partida.routes.js";
import historialRoutes from "./routes/historial.routes.js";
import rankingRoutes from "./routes/ranking.routes.js";
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/juegos", juegoRoutes);
app.use("/api/partidas", partidaRoutes);
app.use("/api/historial", historialRoutes);
app.use("/api/ranking", rankingRoutes);
app.get("/", (req, res) => {
  res.json({
    mensaje: "API Casino Virtual",
  });
});

export default app;
