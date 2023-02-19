const express = require("express");
const users = express.Router();

// we are destructuring the object exported from users.js

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../queries/users.js");

//INDEX
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json({ payload: allUsers, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Read (Singular/Specific ID)
users.get("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  const user = await getUser(uuid);
  if (user.uuid) {
    res.json({ payload: user, success: true });
  } else {
    res.status(404).json({
      payload: "not found",
      success: false,
      error: "user not found",
    });
  }
});
// Create
users.post("/", async (req, res) => {
  const { body } = req;
  // ONLY a successful post will return an object with a key of id
  try {
    const createdUser = await createUser(body);
    if (createdUser.uuid) {
      res.status(200).json({
        success: true,
        payload: createdUser,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include email field",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Update
users.put("/:uuid", async (req, res) => {
  const { uuid } = req.params;

  body.uuid = body;

  const updatedUser = await updateUser(req.body, uuid);
  console.log(updatedUser);
  if (updatedUser.uuid) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

// Delete
users.delete("/:id", async (req, res) => {
  const { uuid } = req.params;
  const deletedUser = await deleteUser(uuid);
  if (deletedUser.uuid) {
    res.status(200).json({ payload: deletedUser, success: true });
  } else {
    res.status(404).json({ payload: "User not found", success: false });
  }
});

module.exports = users;
