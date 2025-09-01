import { Router } from "express";
import { EventController } from "../controllers/eventController";

const router = Router();

router.get("/", EventController.getEvents);      // frontend fetches from here
router.post("/sync", EventController.syncEvents); // trigger sync manually

export default router;
