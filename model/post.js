import { model, Schema } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Post title is required"],
  },
  content: {
    type: String,
    required: [true, "Post content is required"],
  },
  author: {
    type: String,
    required: [true, "Post author is required"],
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
});

// Export post model
export default model("Posts", PostSchema);