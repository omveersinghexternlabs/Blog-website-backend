import express from "express";
const router = express.Router();
import CommentsController from "../controller/CommentsController.js";
import checkPersonAuth from "../middleware/personAuth.js";

// Route level Middleware - to protect Route
router.use("/postComment/:id", checkPersonAuth);

// Public Routes
router.post("/postComment/:id", CommentsController.postComment);

export default router;