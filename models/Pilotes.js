import mongoose from "../dataBase.js";

const piloteSchema = new mongoose.Schema({
	name: { type: String },
});

const Pilote = mongoose.model("Pilote", piloteSchema);

//++++++++++++++++GET+++++++++++++++
export async function getPilotes() {
	return await Pilote.find();
}

export async function getOneById(id) {
	return await Pilote.findById(id);
}

//+++++++++++++ADD pilotes++++++++++++++++
export async function addPilotes(newPilote) {
	// verifier le nom
	const piloteExist = await Pilote.findOne({ name: newPilote.name });

	if (piloteExist) {
		return false;
	}

	const pilote = new Pilote(newPilote);
	await pilote.save();
	return true;
}

//++++++++++++++delete+++++++++++++++
export async function deletePilotes(id) {
	const pilote = await Pilote.findByIdAndDelete(id);

	if (!pilote) {
		return false;
	}

	return true;
}

//++++++++++++++update/put+++++++++++++++++
export async function updatePilotes(newPilote) {
	const id = newPilote._id;

	const pilote = await Pilote.findById(id);

	if (!pilote) {
		return false;
	}

	pilote.name = newPilote.name || pilote.name;
	await pilote.save();
	return true;
}
