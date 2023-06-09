import { connect } from "mongoose";

const connectDB = async (mongoUrl) => {
  return await connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
