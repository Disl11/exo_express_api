import { getUser, addUser, loginUser } from "../models/Users.js";

export async function getUserControlleur(req, res) {
	try {
		const users = await getUser();

		if (users.length === 0) {
			return res.status(400).json({ message: "User don't exist" });
		}
		return res.status(200).json(users);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}

export async function addUserControlleur(req, res) {
	try {
		const sucess = await addUser(req.body);
		if (!sucess) {
			return res.status(409).json({ message: "email already exist" });
		}

		return res.status(200).json({ user: req.body });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}

export async function loginUserController(req, res) {
	try {
		const email = req.body.email;
		const password = req.body.password;

		if (!req.body.email || !req.body.password) {
			return res
				.status(400)
				.json({ message: "email and password required" });
		}

		const user = await loginUser(email, password);

		if (!user) {
			return res
				.status(401)
				.json({ message: "email or password errors" });
		}

		return res.status(200).json({ message: "login succes", user });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}
