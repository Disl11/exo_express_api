import express from "express";
import {
	addPilotesControlleur,
	displayPilotes,
} from "./controller/PilotesControlleur.js";
import { displayVoitures } from "./controller/VoituresControlleur.js";
import { addVoitureControlleur } from "./controller/VoituresControlleur.js";

const app = express();
const port = 3000;

app.use(express.json());

//+++++GET+++++++
app.get("/pilotes", displayPilotes);
app.get("/voitures", displayVoitures);

//+++++Post++++++
app.post("/voitures", addVoitureControlleur);

app.post("/pilotes", addPilotesControlleur);

//++++++DELETE+++++++
app.delete("/pilotes/:id", (req, res) => {
	const pilote = pilotes.find((e) => e.id == req.params.id);
	if (!pilote) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	const indexOf = pilotes.indexOf(pilote);
	pilotes.splice(indexOf, 1);

	return res.status(200).json({ message: "pilote delete" });
});

app.delete("/voitures/:id", (req, res) => {
	const voiture = voitures.find((e) => e.id == req.params.id);
	if (!voiture) {
		return res.status(400).json({ message: "Voiture don't exist" });
	}

	const indexOf = voitures.indexOf(voiture);
	voitures.splice(indexOf, 1);

	return res.status(200).json({ message: "voiture delete" });
});

//+++++++PUT++++++++
app.put("/pilotes", (req, res) => {
	const pilote = pilotes.find((e) => e.id == req.body.id);
	if (!pilote) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	pilote.name = req.body.name || pilote.name;

	return res.status(200).json({ message: "pilotes update" });
});

app.put("/voitures", (req, res) => {
	const voiture = voitures.find((e) => e.id == req.body.id);
	if (!voiture) {
		return res.status(400).json({ message: "Voitues don't exist" });
	}

	voiture.marque = req.body.marque || voiture.marque;
	voiture.couleur = req.body.couleur || voiture.couleur;

	return res.status(200).json({ message: "Voitures update" });
});

app.listen(port, () => {
	console.log(`le server est en marche, numero de port: ${port}`);
});
