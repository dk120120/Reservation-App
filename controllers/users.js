import mongoose from "mongoose";
import User from "../models/user.js";
import ErrorHandler from "../Utils/CustomError.js";

export const getUser = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return next(new ErrorHandler("Invalid user Id", 400));

  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (users.length === 0)
      return next(new ErrorHandler("users do not exist", 400));

    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};
export const updateUser = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return next(new ErrorHandler("Invalid Id", 400));
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return next(new ErrorHandler("Invalid Id", 400));

  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "delete successfully" });
  } catch (err) {
    next(err);
  }
};
