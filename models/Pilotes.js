const pilotes = [
	{ id: 1, name: "Alonzo" },
	{ id: 2, name: "Verstapen" },
	{ id: 3, name: "Occon" },
];

export function getPilotes() {
	return pilotes;
}

export function addPilotes(pilote) {
	pilotes.push(pilote);
}

export { pilotes };
