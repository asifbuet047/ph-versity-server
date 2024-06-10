import mongoose, { Schema } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father Name is required"],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father Contact No is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother Name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother Contact No is required"],
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

const studentSchema = new Schema<TStudent>({
  id: {
    type: Schema.Types.String,
    required: [true, "ID is required"],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User id is required"],
    unique: true,
    ref: "user",
  },
  academicSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemester",
  },
  name: {
    type: userNameSchema,
    required: [true, "Name is required"],
  },
  gender: {
    type: Schema.Types.String,
    enum: {
      values: ["male", "female", "other"],
      message: "{VALUE} is not valid gender",
    },
  },
  dateOfBirth: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: [true, "Email is required"],
    unique: true,
  },
  contactNo: {
    type: Schema.Types.String,
    required: [true, "Phone no is required"],
  },
  emergencyContactNo: {
    type: Schema.Types.String,
  },
  bloodGroup: {
    type: Schema.Types.String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not a valid blood group",
    },
  },
  presentAddress: {
    type: Schema.Types.String,
    required: [true, "Present is required"],
  },
  permanentAddress: {
    type: Schema.Types.String,
    required: [true, "Permanent is required"],
  },
  guardian: {
    type: guardianSchema,
  },
  localGuardian: {
    type: localGuradianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImg: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;
