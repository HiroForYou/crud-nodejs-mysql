import { pool } from "../db.js";

export const getClientsType = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM clientType");
  res.json(rows);
};

export const getClientsTypeIds = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM clientType");
  res.json(
    rows.map((r) => {
      return `${r.idclientType} - ${r.name}`;
    })
  );
};

export const createClientType = async (req, res) => {
  const newClient = req.body;
  await pool.query("INSERT INTO clientType set ?", [newClient]);
  res.json({ message: "success" });
};

export const updateClientType = async (req, res) => {
  const { id } = req.params;
  const newClient = req.body;
  await pool.query("UPDATE clientType set ? WHERE idclientType = ?", [
    newClient,
    id,
  ]);
  res.json({ message: "Client updated" });
};

export const deleteClientType = async (req, res) => {
  const { id } = req.params;
  //console.log("ID", id)
  const result = await pool.query(
    "DELETE FROM clientType WHERE idclientType = ?",
    [id]
  );
  //console.log("resultado", result[0].affectedRows )
  if (result[0].affectedRows === 1) {
    res.json({ message: "Client Type deleted" });
  } else {
    res.status(400).json({ message: "No se ha encontrado ID" });
  }
};
