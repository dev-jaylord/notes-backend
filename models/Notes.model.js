import mongoose from "mongoose";
const { Schema, model } = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default model("NOTES", NotesSchema);
