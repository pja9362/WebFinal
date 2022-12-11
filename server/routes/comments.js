import express from "express";
import { getComments, createComment } from "../controllers/comments.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.post("/", verifyToken, getComments);
router.post("/upload", verifyToken, createComment);

export default router;
