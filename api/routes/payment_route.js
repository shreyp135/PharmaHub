import express from "express";
import {checkout, paymentVerification} from "../controllers/payment_controller.js"

const router = express.Router();

router.post("/checkout", checkout);
router.post("/paymentVerification", paymentVerification)

export default router;
