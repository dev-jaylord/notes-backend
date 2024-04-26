import notesModel from "../models/Notes.model.js";

export const getAllNotes = async (req, res) => {
  const notes = await notesModel.find().exec();

  res.status(200).json(notes);
};

export const postNotes = async (req, res) => {
  console.log("req", req.body);
  const note = new notesModel({
    title: req.body.title,
    description: req.body.description,
  });
  const savedNote = await note.save();
  res.status(200).json(savedNote);
};

export const putNotes = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const savedNote = await notesModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  res.status(200).json(savedNote);
};

export const deleteNotes = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await notesModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Succesfully Deelte",
  });
};
