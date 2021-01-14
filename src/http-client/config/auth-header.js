import AsyncStorage from "@react-native-async-storage/async-storage";


const authHeader = async () => {
	// return authorization header with jwt token
	let token = await AsyncStorage.getItem('token').then((result) => {
		if (result != null) {
			return result;
		}
	});
	console.log(token);
	// return { Authorization: `Bearer ${token}` };
	return `Bearer ${token}`;
};

export default authHeader;
