import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  bio: {
    type: String,
    required: [true, "Bio is required"],
  },
  avatar: {
    type: String,
    required: [true, "Avatar link is required"],
  },
});

// Export user model
export default model("Users", UserSchema);
