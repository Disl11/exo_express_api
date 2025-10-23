import {
	addPilotes,
	deletePilotes,
	getOneById,
	getPilotes,
	updatePilotes,
} from "../models/Pilotes.js";

// +++++++++++++Display/get++++++++++++++++++++
export async function displayPilotes(req, res) {
	try {
		//recuperation des pilotes
		const pilotes = getPilotes();

		if (pilotes.length === 0) {
			return res.status(400).json({ message: "Pilotes don't exist" });
		}

		return res.status(200).json(pilotes);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}

export async function getOneByIdController(req, res) {
	try {
		const id = parseInt(req.params.id);
		const pilote = getOneById(id);

		if (!pilote) {
			return res.status(400).json({ message: "not found" });
		}

		return res.status(200).json(pilote);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}

//+++++++++++++++++++ ajouter/post++++++++++++++++++++++
export async function addPilotesControlleur(req, res) {
	try {
		//recuperation de addpilotes
		const pilotes = await addPilotes(req.body);
		if (!pilotes) {
			return res.status(400).json({ message: "Pilotes already exist" });
		}

		let newPilote = req.body;
		//appel methode add Pilote
		await addPilotes(newPilote);

		return res
			.status(200)
			.json({ message: "pilote is create", pilote: newPilote });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}

//++++++++++++++DELETE+++++++++++++++++++++
export async function remouvePilote(req, res) {
	try {
		const id = req.params.id;

		//recuperation de deletePilotes dans le model
		const sucess = await deletePilotes(id);

		if (!sucess) {
			return res.status(400).json({ message: "Pilotes don't exist" });
		}

		return res.status(200).json({ message: "pilote delete" });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}

//+++++++++++++++++PUT/modifer++++++++++++++++++++++
export async function upGradePilote(req, res) {
	try {
		//recuperaiton de update dans le model
		const sucess = await updatePilotes(req.body);

		if (!sucess) {
			return res.status(400).json({ message: "Pilotes don't exist" });
		}
		return res.status(200).json({ message: "pilotes update" });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}
