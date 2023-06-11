import Post from "../../model/post.js";
const savePost = async (req, res) => {
  //Save post to database
  Post.create(req.body)
    .then((post) => {
      if (post) {
        res.status(200).json({
          message: "Post created successfully",
          data: post,
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "Post not created",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message: err.message || "Some error occurred while creating the post.",
      });
    });
};

const getPosts = async (req, res) => {
  // Get posts from database
  Post.find({}, { __v: 0 })
    .then((posts) => {
      if (posts.length > 0) {
        res.status(200).json(posts);
      } else {
        res.status(404).json({
          code: 404,
          message: "Posts not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message: err.message || "Some error occurred while retrieving posts.",
      });
    });
};

const getPostById = async (req, res) => {
  // Get post by id from database
  Post.findById(req.params.id, { __v: 0 })
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({
          code: 404,
          message: "Post not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message: err.message || "Some error occurred while retrieving post.",
      });
    });
};

const updatePost = async (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((post) => {
      if (post) {
        res.status(200).json({
          code: 200,
          message: "Post updated successfully",
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "Post not updated",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message: err.message || "Some error occurred while updating the post.",
      });
    });
};

const deletePost = async (req, res) => {
  // Delete post from database
  Post.findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then((post) => {
      if (post) {
        res.status(200).json({
          code: 200,
          message: "Post deleted successfully",
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "Post not deleted",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message: err.message || "Some error occurred while deleting the post.",
      });
    });
};

export { savePost, getPosts, getPostById, updatePost, deletePost };
