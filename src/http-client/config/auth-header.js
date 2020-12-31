import AsyncStorage from "@react-native-async-storage/async-storage";

const authHeader = () => {
	// return authorization header with jwt token
	let token = null;
	AsyncStorage.getItem("token", (error, result) => {
		if (result != null) {
			token = result;
		}
	});

	if (token) {
		return { Authorization: `Bearer ${token}` };
	} else {
		return {};
	}
};

export { authHeader };
