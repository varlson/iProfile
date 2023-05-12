import bcrypt from "bcrypt";
import { User } from "./../types/types";
import UserModel from "../models/user";
import { NextFunction, Request, Response } from "express";
import { credentialsVerifier } from "../utils/utils";
import httpCodes from "../../htppCodes.json";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  const verified = credentialsVerifier({ username, password });

  if (verified.thereIsError) {
    const response = [verified.username, verified.password];
    return res.status(501).json({ success: false, errors: response });
  }

  const user = await UserModel.find({ username });
  console.log(user);
  if (user.length) {
    return res.status(501).json({
      success: false,
      errors: ["There exists an account with this username"],
    });
  }

  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(password, salt, async (error, hash) => {
      const _user = new UserModel({ username, hash });
      await _user.save();
      return res.status(200).json(_user);
    });
  });
};

export const editUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params?.id || undefined;

  console.log(id);

  if (!id) {
    return res.status(httpCodes["not_found"]).json({
      success: false,
      msg: "user id not provided ",
    });
  }

  const { username, password } = req.body;
  const updatedUser = await UserModel.findOneAndUpdate(
    { _id: id },
    { $set: { username } }
  );

  if (updatedUser) {
    return res
      .status(httpCodes["ok"])
      .json({ success: true, msg: "User updated succesfully", updatedUser });
  }

  return res
    .status(httpCodes["not_found"])
    .json({ success: false, error: ["User nout found"] });
};

export const listUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allUser = await UserModel.find();
  if (allUser.length) {
    return res.status(httpCodes["ok"]).json({ success: true, data: allUser });
  }

  return res
    .status(httpCodes["ok"])
    .json({ success: true, msg: "There is not exit user yet" });
};
