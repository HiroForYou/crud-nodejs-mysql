import { Router } from "express";
import {
  createClientsRedirect,
  deleteClientRedirect,
  editClientRedirect,
  updateClientRedirect,
  renderClients,
  updateClient,
  getClients,
  createClient,
  deleteClient,
} from "../controllers/clientController.js";
const router = Router();

router.get("/", renderClients);
router.post("/add", createClientsRedirect);
router.get("/update/:id", editClientRedirect);
router.post("/update/:id", updateClientRedirect);
router.get("/delete/:id", deleteClientRedirect);

router.get("/client/list", getClients);
router.post("/client/add", createClient);
router.post("/client/update/:id", updateClient);
router.get("/client/delete/:id", deleteClient);


export default router;
