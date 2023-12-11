import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import hotelsRoutes from "./routes/hotelsRoutes.js";
import roomsRoutes from "./routes/roomsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import errorMiddleware from "./middlewares/error.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connected = async () => {
  try {
    await mongoose.connect(process.env.MONGO, { dbName: "Booking_App_Api" });
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongodDb connected");
});

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);

app.use(errorMiddleware);

app.listen(8000, () => {
  connected();
  console.log("backend server connected successfully");
});
