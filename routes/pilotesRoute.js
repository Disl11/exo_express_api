import express from "express";
import { Router } from "express";

import {
	addPilotesControlleur,
	displayPilotes,
	getOneByIdController,
	remouvePilote,
	upGradePilote,
} from "../controller/PilotesControlleur.js";

const router = Router();

router.get("/", displayPilotes);
router.get("/:id", getOneByIdController);
router.post("/", addPilotesControlleur);
router.delete("/:id", remouvePilote);
router.put("/", upGradePilote);

export default router;
