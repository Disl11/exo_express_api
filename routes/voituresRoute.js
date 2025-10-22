import express from "express";
import { Router } from "express";

import {
	displayVoitures,
	remouveVoiture,
	upGradeVoiture,
} from "../controller/VoituresControlleur.js";
import { addVoitureControlleur } from "../controller/VoituresControlleur.js";

const router = Router();

router.get("/", displayVoitures);
router.post("/", addVoitureControlleur);
router.delete("/:id", remouveVoiture);
router.put("/", upGradeVoiture);

export default router;
