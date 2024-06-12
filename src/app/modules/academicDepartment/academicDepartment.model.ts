import mongoose, { Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: "academicfaculty",
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicDepertmentModel = mongoose.model<TAcademicDepartment>(
  "academicdepartment",
  academicDepartmentSchema,
);
