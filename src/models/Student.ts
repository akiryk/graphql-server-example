import mongoose from "mongoose";

export const Student: StudentProps =
  mongoose.models.Student ||
  mongoose.model("Student", {
    firstName: String,
    lastName: String,
    age: Number,
  });
