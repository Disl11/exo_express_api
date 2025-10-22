import express from "express";
import {
	addPilotesControlleur,
	displayPilotes,
	getOneByIdController,
	remouvePilote,
	upGradePilote,
} from "./controller/PilotesControlleur.js";
import {
	displayVoitures,
	remouveVoiture,
	upGradeVoiture,
} from "./controller/VoituresControlleur.js";
import { addVoitureControlleur } from "./controller/VoituresControlleur.js";
import {
	addUserControlleur,
	getUserControlleur,
	loginUserController,
} from "./controller/UserControlleur.js";

const app = express();
const port = 3000;

app.use(express.json());

//+++++GET+++++++
app.get("/pilotes", displayPilotes);
app.get("/voitures", displayVoitures);
app.get("/pilotes/:id", getOneByIdController);
app.get("/users", getUserControlleur);

//+++++Post++++++

app.post("/voitures", addVoitureControlleur);
app.post("/pilotes", addPilotesControlleur);
app.post("/users", addUserControlleur);
app.post("/users/login", loginUserController);

//++++++DELETE+++++++
app.delete("/pilotes/:id", remouvePilote);
app.delete("/voitures/:id", remouveVoiture);

//+++++++PUT++++++++
app.put("/pilotes", upGradePilote);
app.put("/voitures", upGradeVoiture);

app.listen(port, () => {
	console.log(`le server est en marche, numero de port: ${port}`);
});
