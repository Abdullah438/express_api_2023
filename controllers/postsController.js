const savePost = async (req, res) => {
  // Save post to database
  res.send("Post saved");
};

const getPosts = async (req, res) => {
  // Get all posts from database
  res.send("Get all posts");
};

const getPostById = async (req, res) => {
  // Get post by id from database
  res.send("Get post by id");
};

const updatePost = async (req, res) => {
  // Update post in database
  res.send("Post updated");
};

const patchPost = async (req, res) => {
  // Patch post in database
  res.send("Post patched");
};

const deletePost = async (req, res) => {
  // Delete post from database
  res.send("Post deleted");
};
