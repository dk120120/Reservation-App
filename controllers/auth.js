import User from "../models/user.js";
import ErrorHandler from "../Utils/CustomError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const createUser = new User({
      username: req.body.username,
      password: hash,
      email: req.body.email,
    });
    const saveUser = await createUser.save();

    res.status(201).json({ message: "User has been created!" });
  } catch (err) {
    return next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(new ErrorHandler("User not found!", 404));
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(new ErrorHandler("wrong password or username", 400));

    const { password, ...otherDetails } = user._doc;

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY
    );

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ message: "Login Successfully", ...otherDetails });
  } catch (err) {
    next(err);
  }
};
