const authHeader = () => {
	// return authorization header with jwt token
	// let token = localStorage.getItem("accessToken");
	let token = "accessToken";

	if (token) {
		return { Authorization: `Bearer ${token}` };
	} else {
		return {};
	}
};

export { authHeader };
