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
