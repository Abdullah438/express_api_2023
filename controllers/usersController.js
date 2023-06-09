const addNewUser = (req, res) => {
  res.send("Add new user");
};

const getAllUsers = (req, res) => {
  res.send("Get all users");
};

const getUserById = (req, res) => {
  res.send("Get user by id");
};

const updateUser = (req, res) => {
  res.send("Update user");
};

const patchUser = (req, res) => {
  res.send("Patch user");
};

const deleteUser = (req, res) => {
  res.send("Delete user");
};

export {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUser,
  patchUser,
  deleteUser,
};
