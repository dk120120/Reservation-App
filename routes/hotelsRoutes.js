import express from "express";
const router = express.Router();
import {
  createHotel,
  getAllHotelIformation,
  getHotelInformation,
  updateHotelInformation,
  deleteHotelInformation,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../Utils/verifyToken.js";

//create
router.post("/", verifyAdmin, createHotel);

//read
// 1. get all hotel information
router.get("/", getAllHotelIformation);

// 2. get information

router.get("/:id", getHotelInformation);
//update

router.put("/:id", verifyAdmin, updateHotelInformation);
//delete

router.delete("/:id", verifyAdmin, deleteHotelInformation);

export default router;
