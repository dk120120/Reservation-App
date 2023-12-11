import express from "express";
const router = express.Router();
import { verifyAdmin, verifyUser } from "../Utils/verifyToken.js";
import {
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

//GET
router.get("/:id", verifyUser, getUser);
//GET All
router.get("/", verifyAdmin, getAllUser);

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);

export default router;
