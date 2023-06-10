import { request } from "express";
import users from "../../model/user.js";
const addNewUser = (req, res) => {
  users
    .create(req.body)
    .then((data) => {
      if (!data) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send({
          message: "Some error occurred while creating the user.",
        });
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(201).send({
          message: "User created successfully.",
        });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllUsers = (req, res) => {
  users
    .find({}, { __v: 0 })
    .then((data) => {
      res.setHeader("Content-Type", "application/json");
      const users = data;
      if (users.length === 0) {
        res.status(404).send({
          message: "No users found.",
        });
      } else {
        res.status(200).send(users);
      }
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

const getUserById = (req, res) => {
  users
    .find({ _id: req.params.id }, { __v: 0 })
    .then((data) => {
      res.setHeader("Content-Type", "application/json");
      const user = data;
      if (!user) {
        res.status(404).send({
          message: "No user found.",
        });
      } else {
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user.",
      });
    });
};

const updateUser = (req, res) => {
  users
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send({
          message: `Cannot update user with id=${req.params.id}. Maybe user was not found!`,
        });
      } else {
        res.setHeader("Content-Type", "application/json");
        res.send({
          message: "User was updated successfully.",
        });
      }
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({
        message: "Error updating user with id=" + req.params.id,
      });
    });
};

const deleteUser = (req, res) => {
  users
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send({
          message: `Cannot delete user with id=${req.params.id}. Maybe user was not found!`,
        });
      } else {
        res.setHeader("Content-Type", "application/json");
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({
        message: "Could not delete user with id=" + req.params.id,
      });
    });
};

export { addNewUser, getAllUsers, getUserById, updateUser, deleteUser };
