import express from "express";
import { getkit } from "../controller/cricket.controller.js"; // Add .js

const router = express.Router();

router.get("/", getkit);

export default router;
