import { pool } from "../db.js";

export const renderClients = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM client");
  res.render("clients", { clients: rows });
};

export const createClients = async (req, res) => {
  const newClient = req.body;
  await pool.query("INSERT INTO client set ?", [newClient]);
  res.redirect("/");
};

export const editClient = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM client WHERE idclient = ?", [
    id,
  ]);
  res.render("clients_edit", { client_: result[0] });
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const newClient = req.body;
  await pool.query("UPDATE client set ? WHERE idclient = ?", [newClient, id]);
  res.redirect("/");
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM client WHERE idclient = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Client deleted" });
  }
  res.redirect("/");
};
