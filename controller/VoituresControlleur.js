import { getVoitures, addVoiture } from "../models/Voitures.js";

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
