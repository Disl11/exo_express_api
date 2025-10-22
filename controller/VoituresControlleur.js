import {
	getVoitures,
	addVoiture,
	deleteVoiture,
	updateVoitures,
} from "../models/Voitures.js";

// afficher/GET  voitures
export function displayVoitures(req, res) {
	const voitures = getVoitures();

	if (voitures.length === 0) {
		return res.status(400).json({ message: "voiture don't exist" });
	}

	return res.status(200).json(voitures);
}

//Ajouter/post voitures
export function addVoitureControlleur(req, res) {
	const voitures = getVoitures();
	const voiture = voitures.find((e) => e.id == req.body.id);
	if (voiture) {
		return res.status(400).json({ message: "Voiture already exist" });
	}

	let newVoiture = req.body;
	addVoiture(newVoiture);

	return res
		.status(200)
		.json({ message: "pilote is create", voiture: newVoiture });
}

//Delete

export function remouveVoiture(req, res) {
	const sucess = deleteVoiture(id);

	if (!sucess) {
		return res.status(400).json({ message: "Voiture don't exist" });
	}

	return res.status(200).json({ message: "Voiture delete" });
}

//PUT/modifer
export function upGradeVoiture(req, res) {
	const sucess = updateVoitures(req.body);

	if (!sucess) {
		return res.status(400).json({ message: "Voiture don't exist" });
	}
	return res.status(200).json({ message: "Voiture update" });
}
