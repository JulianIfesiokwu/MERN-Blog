import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => console.log("Error connecting to DB"));

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.use("/api/user", userRoutes);