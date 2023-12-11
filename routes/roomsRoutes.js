import express from "express";
const router = express.Router();
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRooms,
  getRoom,
} from "../controllers/rooms.js";

import { verifyAdmin } from "../Utils/verifyToken.js";

router.get("/:id", getRoom);
router.get("/", getRooms);
router.post("/:hotelId", verifyAdmin, createRoom);
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
router.put("/:id", verifyAdmin, updateRoom);

export default router;
