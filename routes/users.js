import { Router } from "express";
import {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUser,
  patchUser,
  deleteUser,
} from "../controllers/usersController.js";

const router = Router();

// GET all users
router.route("/").get(getAllUsers);

// POST a new user
router.route("/").post(addNewUser);

// GET a user by id
router.route("/:id").get(getUserById);

// DELETE a user by id
router.route("/:id").delete(deleteUser);

// PUT a user by id
router.route("/:id").put(updateUser);

// PATCH a user by id
router.route("/:id").patch(patchUser);

export default router;
