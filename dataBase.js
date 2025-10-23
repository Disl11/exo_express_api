// Charger la bibliothéque mongoose
import mongoose from "mongoose";

//definir URI de connexion a mongoDB
// URI contient le nom utilisateur, le mdp et adresse cluster
const uri =
	"mongodb+srv://brianpro1993_db_user:W1mAa0m7p3sD7HvB@cluster0.utczccm.mongodb.net/";

// essayer de connecter a la BDD mongoDB avec mongoose
mongoose
	.connect(uri) //.connect() retourne une promesse
	.then(() => console.log("connecte à MongoDB")) //si connection réussi
	.catch((err) => console.error("Erreur de connexion:", err)); // si cela echoue

//export mongoose pour pouvoir l'utiliser dans d'autre fichier du projet
export default mongoose;
