const pilotes = [
	{ id: 1, name: "Alonzo" },
	{ id: 2, name: "Verstapen" },
	{ id: 3, name: "Occon" },
];

//GET
export function getPilotes() {
	return pilotes;
}

//ADD pilotes
export function addPilotes(pilote) {
	pilotes.push(pilote);
}
export { pilotes };

//delete
export function deletePilotes(id) {
	const pilote = pilotes.find((e) => e.id == id);
	if (!pilote) {
		return false;
	}

	const indexOf = pilotes.indexOf(pilote);
	pilotes.splice(indexOf, 1);

	return true;
}

//update/put
export function updatePilotes(id, newdata) {
	const pilote = pilotes.find((e) => e.id == id);

	if (!pilote) {
		return false;
	}

	pilote.name = newdata.name || pilote.name;
	return true;
}
