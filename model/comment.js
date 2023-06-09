import { model, Schema } from "mongoose";

const CommentSchema = new Schema({
  postId: {
    type: String,
    required: [true, "Post id is required"],
  },
  content: {
    type: String,
    required: [true, "Comment content is required"],
  },
  author: {
    type: String,
    required: [true, "Comment author is required"],
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
});

// Export comment model
export default model("Comments", CommentSchema);
