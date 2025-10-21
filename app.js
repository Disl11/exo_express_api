import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const pilotes = [
	{ id: 1, name: "Alonzo" },
	{ id: 2, name: "Verstapen" },
	{ id: 3, name: "Occon" },
];

const voitures = [
	{ id: 1, marque: "Ferrari", couleur: "rouge" },
	{ id: 2, marque: "Mercedes", couleur: "noir" },
	{ id: 3, marque: "renauld", couleur: "jaune" },
];
//+++++GET+++++++
app.get("/pilotes", (req, res) => {
	if (pilotes.length === 0) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	return res.status(200).json(pilotes);
});

app.get("/voitures", (req, res) => {
	if (voitures.length === 0) {
		return res.status(400).json({ message: "voiture don't exist" });
	}

	return res.status(200).json(voitures);
});

//+++++Post++++++
app.post("/pilotes", (req, res) => {
	const pilote = pilotes.find((e) => e.id == req.body.id);
	if (pilote) {
		return res.status(400).json({ message: "Pilotes already exist" });
	}

	let newPilote = req.body;
	pilotes.push(newPilote);

	return res
		.status(200)
		.json({ message: "pilote is create", pilote: newPilote });
});

app.post("/voitures", (req, res) => {
	const voiture = voitures.find((e) => e.id == req.body.id);
	if (voiture) {
		return res.status(400).json({ message: "Voiture already exist" });
	}

	let newVoiture = req.body;
	voitures.push(newVoiture);

	return res
		.status(200)
		.json({ message: "voiture is create", voiture: newVoiture });
});

//++++++DELETE+++++++
app.delete("/pilotes/:id", (req, res) => {
	const pilote = pilotes.find((e) => e.id == req.params.id);
	if (!pilote) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	const indexOf = pilotes.indexOf(pilote);
	pilotes.splice(indexOf, 1);

	return res.status(200).json({ message: "pilote delete" });
});

app.delete("/voitures/:id", (req, res) => {
	const voiture = voitures.find((e) => e.id == req.params.id);
	if (!voiture) {
		return res.status(400).json({ message: "Voiture don't exist" });
	}

	const indexOf = voitures.indexOf(voiture);
	voitures.splice(indexOf, 1);

	return res.status(200).json({ message: "voiture delete" });
});

//+++++++PUT++++++++
app.put("/pilotes", (req, res) => {
	const pilote = pilotes.find((e) => e.id == req.body.id);
	if (!pilote) {
		return res.status(400).json({ message: "Pilotes don't exist" });
	}

	pilote.name = req.body.name || pilote.name;

	return res.status(200).json({ message: "pilotes update" });
});

app.put("/voitures", (req, res) => {
	const voiture = voitures.find((e) => e.id == req.body.id);
	if (!voiture) {
		return res.status(400).json({ message: "Voitues don't exist" });
	}

	voiture.marque = req.body.marque || voiture.marque;
	voiture.couleur = req.body.couleur || voiture.couleur;

	return res.status(200).json({ message: "Voitures update" });
});

app.listen(port, () => {
	console.log(`le server est en marche, numero de port: ${port}`);
});
