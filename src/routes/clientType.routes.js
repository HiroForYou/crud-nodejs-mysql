import { Router } from "express";
import {
  updateClientType,
  getClientsType,
  createClientType,
  deleteClientType,
  getClientsTypeIds,
} from "../controllers/clientTypeController.js";
const router = Router();

router.get("/clientType/list", getClientsType);
router.post("/clientType/add", createClientType);
router.post("/clientType/update/:id", updateClientType);
router.get("/clientType/delete/:id", deleteClientType);
router.get("/clientType/getClientsTypeIds", getClientsTypeIds);

export default router;
