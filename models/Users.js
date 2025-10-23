import mongoose from "../dataBase.js";

// Schema de la collections users
const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

//instancier le modéle
const User = mongoose.model("User", userSchema);

export async function getUser() {
	return await User.find(); //retourne une promeese qui contient la collection "users"
}

export async function addUser(newUser) {
	//verifier l'email
	const userExist = await User.findOne({ email: newUser.email }); //findOne() cherche un seul document correspondant, ici a {email: newUser.email}
	if (userExist) {
		return false;
	}

	const user = new User(newUser);
	await user.save(); // enrigstre dans la collection MongoDb
	return true;
}

export async function loginUser(email, password) {
	const userLogin = await User.findOne({ email, password });
	return userLogin || null;
}
