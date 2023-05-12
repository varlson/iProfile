import { Schema, model } from "mongoose";

const User = new Schema(
  {
    username: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const UserModel = model("User", User);
export default UserModel;
