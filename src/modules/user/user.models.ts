import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../app/config";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  console.log(this);
  const hash = await bcrypt.hash(this.password, Number(config.default_salt));
  console.log(hash);
  this.password = hash;
  next();
});

userSchema.post("save", async function (document, next) {
  console.log(document);
  document.password = "HASHED";
  next();
});

export const UserModel = mongoose.model("user", userSchema);
