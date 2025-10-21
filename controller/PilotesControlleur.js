import {
	addPilotes,
	deletePilotes,
	getPilotes,
	updatePilotes,
} from "../models/Pilotes.js";

// Display/get
export function displayPilotes(req, res) {
	const pilotes = getPilotes();

	if (pilotes.length === 0) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	return res.status(200).json(pilotes);
}

// ajouter/post
export function addPilotesControlleur(req, res) {
	const pilotes = getPilotes();
	const pilote = pilotes.find((e) => e.id == req.body.id);
	if (pilote) {
		return res.status(400).json({ message: "Pilotes already exist" });
	}

	let newPilote = req.body;
	addPilotes(newPilote);

	return res
		.status(200)
		.json({ message: "pilote is create", pilote: newPilote });
}

//DELETE
export function remouvePilote(req, res) {
	const id = req.params.id;

	const sucess = deletePilotes(id);

	if (!sucess) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	return res.status(200).json({ message: "pilote delete" });
}

//PUT/modifer
export function upGradePilote(req, res) {
	const id = req.body.id;
	const sucess = updatePilotes(id, req.body);

	if (!sucess) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}
	return res.status(200).json({ message: "pilotes update" });
}
