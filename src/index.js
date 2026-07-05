import app from "./app.js";

import config from "./config.js";

import { conmysql } from "./db.js";

async function iniciarServidor() {
  try {
    const conexion = await conmysql.getConnection();

    console.log("✅ Base de datos conectada");

    conexion.release();

    app.listen(config.PORT, () => {
      console.log("================================");

      console.log("Servidor iniciado");

      console.log("Puerto:", config.PORT);

      console.log("http://localhost:" + config.PORT);

      console.log("================================");
    });
  } catch (error) {
    console.log(error);
  }
}

iniciarServidor();
