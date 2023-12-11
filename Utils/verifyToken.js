import jwt from "jsonwebtoken";
import ErrorHandler from "./CustomError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(new ErrorHandler("you are not authenticated", 401));

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return next(new ErrorHandler("Invalid token", 403));

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, (req, res, next) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(new ErrorHandler("you are not authorized!", 403));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, (req, res, next) => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(new ErrorHandler("you are not authorized!", 403));
    }
  });
};
