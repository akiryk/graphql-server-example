import mongoose from "mongoose";
export const Student = mongoose.models.Student ||
    mongoose.model("Student", {
        // @ts-ignore
        firstName: String,
        lastName: String,
        age: Number,
    });
