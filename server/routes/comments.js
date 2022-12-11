import express from "express";
import { getComments, createComment } from "../controllers/comments.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// router.post("/", verifyToken, getFeedPosts);
// router.get("/:userId/posts", verifyToken, getUserPosts);
router.post("/", verifyToken, getComments);
router.post("/upload", verifyToken, createComment);
// router.patch("/:userId/:commentId", verifyToken, getUserPosts);
// router.delete("/:userId/:commentId", verifyToken, likePost);

export default router;
