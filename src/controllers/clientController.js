import { pool } from "../db.js";

export const getClients = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM client");
  res.json(rows);
};

export const createClient = async (req, res) => {
  const newClient = req.body;
  await pool.query("INSERT INTO client set ?", [newClient]);
  res.json({ message: "success" });
};

export const updateClient= async (req, res) => {
  const { id } = req.params;
  const newClient = req.body;
  await pool.query("UPDATE client set ? WHERE idclient = ?", [newClient, id]);
  res.json({ message: "Client updated" });
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;
  //console.log("ID", id)
  const result = await pool.query("DELETE FROM client WHERE idclient = ?", [id]);
  //console.log("resultado", result[0].affectedRows )
  if (result[0].affectedRows === 1) {
    res.json({ message: "Client deleted" });
  } else {
    res.status(400).json({ message: "No se ha encontrado ID" });
  }
};

// Para vistas
export const renderClients = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM client");
  res.render("clients", { clients: rows });
};

export const createClientsRedirect = async (req, res) => {
  const newClient = req.body;
  await pool.query("INSERT INTO client set ?", [newClient]);
  res.redirect("/");
};

export const editClientRedirect = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM client WHERE idclient = ?", [
    id,
  ]);
  res.render("clients_edit", { client_: result[0] });
};

export const updateClientRedirect= async (req, res) => {
  const { id } = req.params;
  const newClient = req.body;
  await pool.query("UPDATE client set ? WHERE idclient = ?", [newClient, id]);
  res.redirect("/");
};

export const deleteClientRedirect = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM client WHERE idclient = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Client deleted" });
  }
  res.redirect("/");
};
