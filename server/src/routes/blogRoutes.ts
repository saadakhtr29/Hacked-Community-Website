import { Router } from "express";
import { BlogController } from "../controllers/blogController";

const router = Router();

// GET /api/blogs
router.get("/", BlogController.getAllPosts);

export default router;