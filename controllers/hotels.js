import Hotel from "../models/hotel.js";
import mongoose from "mongoose";
import ErrorHandler from "../Utils/CustomError.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedNewHotel = await newHotel.save();
    res.status(201).json(savedNewHotel);
  } catch (err) {
    next(err);
  }
};

export const getAllHotelIformation = async (req, res, next) => {
  try {
    const getAllHotelIformation = await Hotel.find({});
    res.status(200).json(getAllHotelIformation);
  } catch (err) {
    next(err);
  }
};
export const getHotelInformation = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new ErrorHandler("Invalid userId format", 400));
  }

  try {
    const getHotelInformation = await Hotel.findById(req.params.id);
    res.status(200).json(getHotelInformation);
  } catch (err) {
    next(err);
  }
};

export const updateHotelInformation = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new ErrorHandler("Invalid userId format", 400));
  }
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotelInformation = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new ErrorHandler("Invalid userId format", 400));
  }
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: deletedHotel });
  } catch (err) {
    next(err);
  }
};
