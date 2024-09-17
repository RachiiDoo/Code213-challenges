import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database is connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("users", userSchema);

app.get("/getusers", async (req, res) => {
  const userData = await UserModel.find();
  res.json(userData);
});
