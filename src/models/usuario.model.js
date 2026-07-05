import { conmysql } from "../db.js";

export const crearUsuario = async (usuario) => {
  const sql = `
        INSERT INTO usuarios
        (nombre,correo,password)
        VALUES(?,?,?)
    `;

  const [resultado] = await conmysql.query(sql, [
    usuario.nombre,
    usuario.correo,
    usuario.password,
  ]);

  return resultado;
};

export const buscarCorreo = async (correo) => {
  const [rows] = await conmysql.query(
    "SELECT * FROM usuarios WHERE correo=?",

    [correo],
  );

  return rows[0];
};

export const buscarId = async (id) => {
  const [rows] = await conmysql.query(
    "SELECT id,nombre,correo,monedas,foto FROM usuarios WHERE id=?",

    [id],
  );

  return rows[0];
};
// Obtener todos los usuarios
export const obtenerUsuarios = async () => {
  const [rows] = await conmysql.query(
    "SELECT id,nombre,correo,monedas,foto,fecha_registro FROM usuarios",
  );
  return rows;
};

// Actualizar usuario
export const actualizarUsuario = async (id, usuario) => {
  const sql = `
        UPDATE usuarios
        SET nombre=?, correo=?, foto=?
        WHERE id=?
    `;

  const [resultado] = await conmysql.query(sql, [
    usuario.nombre,
    usuario.correo,
    usuario.foto,
    id,
  ]);

  return resultado;
};

// Eliminar usuario
export const eliminarUsuario = async (id) => {
  const [resultado] = await conmysql.query("DELETE FROM usuarios WHERE id=?", [
    id,
  ]);

  return resultado;
};
export const obtenerSaldo = async (id) => {
  const [rows] = await conmysql.query(
    "SELECT monedas FROM usuarios WHERE id=?",

    [id],
  );

  return rows[0];
};

export const actualizarMonedas = async (id, monedas) => {
  await conmysql.query(
    "UPDATE usuarios SET monedas=? WHERE id=?",

    [monedas, id],
  );
};
