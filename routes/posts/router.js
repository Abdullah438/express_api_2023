import { Router } from "express";
import {
  savePost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../../controllers/posts/controller.js";

const router = Router();

// Save a post
router.route("/").post(savePost);

// Get all posts
router.route("/").get(getPosts);

// Get a post by id
router.route("/:id").get(getPostById);

// Update a post by id
router.route("/:id").put(updatePost);

// Delete a post by id
router.route("/:id").delete(deletePost);

// Export the router
export default router;
