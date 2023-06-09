import dotenv from "dotenv";
import express from "express";
import chalk from "chalk";
import { connect, model, Schema } from "mongoose";
//Configure .env file
dotenv.config();
//Express App
const app = express();
//Use json
app.use(express.json());

const MONGO_URI = process.env.MONGO_URL + "/" + process.env.MONGO_DB_NAME;
// Connect to MongoDB
connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log(chalk.green.bold("MongoDB connected"));
  })
  .catch((err) => {
    console.log(chalk.red.bold(err));
  });

//Create Schema
//Listen to server get port and url from .env file
const port = parseInt(process.env.PORT) || "YOUR_PORT";
const url = process.env.URL || "YOUR_URL";
app.listen(port, () => {
  console.log(chalk.green.bold(`Server is running on http://${url}:${port}`));
  console.log(
    chalk.green.bold(`Press ${chalk.red.bold("Ctrl + C")} to stop the server`),
  );
});
