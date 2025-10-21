const voitures = [
	{ id: 1, marque: "Ferrari", couleur: "rouge" },
	{ id: 2, marque: "Mercedes", couleur: "noir" },
	{ id: 3, marque: "renauld", couleur: "jaune" },
];

export function getVoitures() {
	return voitures;
}

export function addVoiture(voiture) {
	voitures.push(voiture);
}

export { voitures };

export function deleteVoiture(id) {
	const voiture = voitures.find((e) => e.id == id);
	if (!voiture) {
		return false;
	}

	const indexOf = voitures.indexOf(voiture);
	voitures.splice(indexOf, 1);

	return true;
}

//update/put
export function updateVoitures(id, newdata) {
	const voiture = voitures.find((e) => e.id == id);

	if (!voiture) {
		return false;
	}

	voiture.marque = newdata.marque || voiture.marque;
	voiture.couleur = newdata.couleur || voiture.couleur;

	return true;
}
