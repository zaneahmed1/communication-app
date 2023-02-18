const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users ORDER BY uuid ASC");
    return allUsers;
  } catch (err) {
    return err;
  }
};

const getUser = async (uuid) => {
  try {
    const oneUser = await db.one(
      "SELECT * FROM users WHERE uuid=$1",
      uuid
    );
    return oneUser;
  } catch (err) {
    return err;
  }
};

const createUser = async (user) => {
    try {
        const newUser = await db.one(
          "INSERT INTO users (uuid, email, firstname, lastname, photourl) VALUES ($1, $2, $3, $4, $5) RETURNING *",
          [
            user.uuid,
            user.email,
            user.firstname,
            user.lastname,
            user.photourl,
          ]
        );
        return newUser;
      } catch (error) {
        return error;
      }
};

const updateUser = async (user, uuid) => {
    try {
        const updatedUser = await db.one(
          "UPDATE users SET email=$1, firstname=$2, lastname=$3, photourl=$4 WHERE uuid=$5 RETURNING *",
          [
            user.email,
            user.firstname,
            user.lastname,
            user.photourl,
            uuid,
          ]
        );
        return updatedUser;
      } catch (error) {
        return error;
      }
};

const deleteUser = async (uuid) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE uuid=$1 RETURNING *",
      uuid
    );
    return deletedUser;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
};
