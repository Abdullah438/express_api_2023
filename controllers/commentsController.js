const addComment = async (req, res) => {
  // Save comment to database
  res.send("Comment saved");
};

const getComments = async (req, res) => {
  // Get all comments from database
  res.send("Get all comments");
};

const getCommentById = async (req, res) => {
  // Get comment by id from database
  res.send("Get comment by id");
};

const updateComment = async (req, res) => {
  // Update comment in database
  res.send("Comment updated");
};

const patchComment = async (req, res) => {
  // Patch comment in database
  res.send("Comment patched");
};

const deleteComment = async (req, res) => {
  // Delete comment from database
  res.send("Comment deleted");
};
