import mongoose, { Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFacultyModel = mongoose.model<TAcademicFaculty>(
  "academicfaculty",
  academicFacultySchema,
);
