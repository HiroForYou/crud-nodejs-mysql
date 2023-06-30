import { Router } from "express";
import {
  createClients,
  deleteClient,
  editClient,
  renderClients,
  updateClient,
} from "../controllers/clientController.js";
const router = Router();

router.get("/", renderClients);
router.post("/add", createClients);
router.get("/update/:id", editClient);
router.post("/update/:id", updateClient);
router.get("/delete/:id", deleteClient);

export default router;
