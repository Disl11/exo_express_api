import {
	addPilotes,
	deletePilotes,
	getOneById,
	getPilotes,
	updatePilotes,
} from "../models/Pilotes.js";

// +++++++++++++Display/get++++++++++++++++++++
export function displayPilotes(req, res) {
	//recuperation des pilotes
	const pilotes = getPilotes();

	if (pilotes.length === 0) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	return res.status(200).json(pilotes);
}

export function getOneByIdController(req, res) {
	const id = parseInt(req.params.id);
	const pilote = getOneById(id);

	if (!pilote) {
		return res.status(400).json({ message: "not found" });
	}

	return res.status(200).json(pilote);
}

//+++++++++++++++++++ ajouter/post++++++++++++++++++++++
export function addPilotesControlleur(req, res) {
	//recuperation des pilotes
	const pilotes = getPilotes();
	const pilote = pilotes.find((e) => e.id == req.body.id);
	if (pilote) {
		return res.status(400).json({ message: "Pilotes already exist" });
	}

	let newPilote = req.body;
	//appel methode add Pilote
	addPilotes(newPilote);

	return res
		.status(200)
		.json({ message: "pilote is create", pilote: newPilote });
}

//++++++++++++++DELETE+++++++++++++++++++++
export function remouvePilote(req, res) {
	const id = req.params.id;

	//recuperation de deletePilotes dans le model
	const sucess = deletePilotes(id);

	if (!sucess) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	return res.status(200).json({ message: "pilote delete" });
}

//+++++++++++++++++PUT/modifer++++++++++++++++++++++
export function upGradePilote(req, res) {
	//recuperaiton de update dans le model
	const sucess = updatePilotes(req.body);

	if (!sucess) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}
	return res.status(200).json({ message: "pilotes update" });
}
