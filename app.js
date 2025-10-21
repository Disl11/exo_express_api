import express from "express";
import {
	addPilotesControlleur,
	displayPilotes,
	remouvePilote,
	upGradePilote,
} from "./controller/PilotesControlleur.js";
import {
	displayVoitures,
	remouveVoiture,
	upGradeVoiture,
} from "./controller/VoituresControlleur.js";
import { addVoitureControlleur } from "./controller/VoituresControlleur.js";

const app = express();
const port = 3000;

app.use(express.json());

//+++++GET+++++++
app.get("/pilotes", displayPilotes);
app.get("/voitures", displayVoitures);

//+++++Post++++++
app.post("/voitures", addVoitureControlleur);
app.post("/pilotes", addPilotesControlleur);

//++++++DELETE+++++++
app.delete("/pilotes/:id", remouvePilote);
app.delete("/voitures/:id", remouveVoiture);

//+++++++PUT++++++++
app.put("/pilotes", upGradePilote);
app.put("/voitures", upGradeVoiture);

app.listen(port, () => {
	console.log(`le server est en marche, numero de port: ${port}`);
});
