import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import NotesRoute from "./routes/notes.route.js";
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017`);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Connected to mongodb", error);

    throw new Error(error ? error : "Theres someting wrong");
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB got disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB got connected");
});

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/notes", NotesRoute);

app.listen(3000, (res) => {
  connect();
  console.log("Runing on port:", res);
});
