import Comment from "../../../model/comment.js";
const getAllComments = async (req, res) => {
  // Get comments from database
  const postId = req.query.postId;
  if (postId === undefined) {
    res.status(400).json({
      code: 400,
      message: "Post id is required",
    });
    return;
  }
  Comment.find({ postId: postId }, { __v: 0 })
    .then((comments) => {
      if (comments.length > 0) {
        res.status(200).json(comments);
      } else {
        res.status(404).json({
          code: 404,
          message: `No comments found for post id ${postId}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message:
          err.message || "Some error occurred while retrieving comments.",
      });
    });
};

const getCommentById = async (req, res) => {
  Comment.findById(req.params.id, { __v: 0 })
    .then((comment) => {
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).json({
          code: 404,
          message: "Comment not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message: err.message || "Some error occurred while retrieving comment.",
      });
    });
};

const createComment = async (req, res) => {
  // Create comment in database
  const comment = new Comment(req.body);
  comment
    .save()
    .then((comment) => {
      if (comment) {
        res.status(200).json({
          message: "Comment created successfully",
          data: comment,
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "Comment not created",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message:
          err.message || "Some error occurred while creating the comment.",
      });
    });
};

const updateComment = async (req, res) => {
  // Update comment in database
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((comment) => {
      if (comment) {
        res.status(200).json({
          message: "Comment updated successfully",
          data: comment,
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "Comment not updated",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message:
          err.message || "Some error occurred while updating the comment.",
      });
    });
};

const deleteComment = async (req, res) => {
  // Delete comment from database
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => {
      if (comment) {
        res.status(200).json({
          message: "Comment deleted successfully",
          data: comment,
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "Comment not deleted",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        message:
          err.message || "Some error occurred while deleting the comment.",
      });
    });
};

export {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
