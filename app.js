import express from "express";
import pilotesRoute from "./routes/pilotesRoute.js";
import voituresRoute from "./routes/voituresRoute.js";
import usersRoute from "./routes/usersRoute.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/pilotes", pilotesRoute);
app.use("/voitures", voituresRoute);
app.use("/users", usersRoute);

app.listen(port, () => {
	console.log(`le server est en marche, numero de port: ${port}`);
});
