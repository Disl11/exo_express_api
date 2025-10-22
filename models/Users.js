let users = [
	{ id: 1, name: "Brian", email: "brian@gmail.com", password: "123" },
	{ id: 2, name: "chloe", email: "chloe@gmail.com", password: "azerty" },
	{ id: 3, name: "jordan", email: "jordan@gmail.com", password: "987" },
];

export function getUser() {
	return users;
}

export function addUser(newUser) {
	//verifier l'email
	const userExist = users.find((u) => u.email === newUser.email);
	if (userExist) {
		return false;
	}

	users.push(newUser);
	return true;
}

export function loginUser(email, password) {
	const userLogin = users.find(
		(u) => u.email === email && u.password === password
	);

	return userLogin || null;
}
