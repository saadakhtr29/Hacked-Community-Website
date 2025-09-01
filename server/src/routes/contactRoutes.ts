import { Router } from "express";
import { ContactController } from "../controllers/contactController";

const router = Router();

// POST /api/contact → user submits the form
router.post("/", ContactController.submitForm);

// GET /api/contact → admin fetches all contact submissions
router.get("/", ContactController.getContacts);

export default router;
