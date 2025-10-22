import { getUser, addUser, loginUser } from "../models/Users.js";

export function getUserControlleur(req, res) {
	const users = getUser();

	if (users.length === 0) {
		return res.status(400).json({ message: "User don't exist" });
	}

	return res.status(200).json(users);
}

export function addUserControlleur(req, res) {
	const sucess = addUser(req.body);

	if (!sucess) {
		return res.status(409).json({ message: "email already exist" });
	}

	return res.status(200).json({ user: req.body });
}

export function loginUserController(req, res) {
	const email = req.body.email;
	const password = req.body.password;

	if (!req.body.email || !req.body.password) {
		return res.status(400).json({ message: "email and password required" });
	}

	const user = loginUser(email, password);

	if (!user) {
		return res.status(401).json({ message: "email or password errors" });
	}

	return res.status(200).json({ message: "login succes", user });
}
