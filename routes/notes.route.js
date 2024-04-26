import express from "express";
import {
  deleteNotes,
  getAllNotes,
  postNotes,
  putNotes,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", getAllNotes); // Matches the getAllNotes function to handle GET requests to "/"
router.post("/", postNotes); // Matches the postNotes function to handle POST requests to "/"
router.put("/:id", putNotes); // Matches the putNotes function to handle PUT requests to "/:id"
router.delete("/:id", deleteNotes); // Matches the deleteNotes function to handle DELETE requests to "/:id"

export default router;
