import { Router } from "express";
import {
  getShippingMethods,
  getShippingDetailsById,
  getShippingOffDays,
} from "../controllers/shipping.controller.js";

const router = Router();

// Route to get the list of off days
router.get("/off-days", getShippingOffDays);

// Route to get the list of available shipping methods
router.get("/", getShippingMethods);

// Route to get shipping method details
router.get("/:id", getShippingDetailsById);

export default router;
