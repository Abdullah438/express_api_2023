import { Router } from "express";
import {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../../controllers/users/controller.js";

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

export default router;
