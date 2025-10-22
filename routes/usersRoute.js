import express from "express";
import { Router } from "express";

import {
	addUserControlleur,
	getUserControlleur,
	loginUserController,
} from "../controller/UserControlleur.js";

const router = Router();

router.get("/", getUserControlleur);
router.post("/", addUserControlleur);
router.post("/login", loginUserController);

export default router;
