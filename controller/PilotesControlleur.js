import { addPilotes, getPilotes } from "../models/Pilotes.js";

export function displayPilotes(req, res) {
	const pilotes = getPilotes();

	if (pilotes.length === 0) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	return res.status(200).json(pilotes);
}

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
