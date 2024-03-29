import dotenv from "dotenv";
import express from "express";
import chalk from "chalk";
import connectDB from "./db/connect.js";
import userRouter from "./routes/users/router.js";
import postRouter from "./routes/posts/router.js";
import commentRouter from "./routes/posts/comments/router.js";
//Configure .env file
dotenv.config();
//Express App
const app = express();
//Use json
app.use(express.json());

// User Router
app.use("/api/users", userRouter);
// Post Router
app.use("/api/posts", postRouter);
// Comment Router
app.use("/api/comments", commentRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(parseInt(process.env.PORT), process.env.URL, () => {
      console.log(`server is on ${chalk.green.bold("http://127.0.0.1:3000")}`);
      console.log(`Press ${chalk.red.bold("CTRL + C")} to stop the server`);
    });
  } catch (error) {
    console.log(chalk.red.bold(error));
  }
};

//Start the app
start();
