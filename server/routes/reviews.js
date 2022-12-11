import express from "express";
import { getFeedReviews, getUserReviews, likeReview } from "../controllers/reviews.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedReviews);
router.get("/:userId/reviews", verifyToken, getUserReviews);
router.get("/:id/reviewId", verifyToken, getUserReviews);

/* UPDATE */
router.patch("/:id/like", verifyToken, likeReview);

export default router;
