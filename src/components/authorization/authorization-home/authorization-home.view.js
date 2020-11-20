import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AuthorizationHome = () => {
	const navigation = useNavigation();
	return (
		<View style={{flex: 1, alignItems: "center", backgroundColor: "white"}}>
			<View
				style={{
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "stretch",
					maxWidth: 500,
					height: "100%",
					width: 250,
				}}
			>
				<Image
					style={{ height: "50px", paddingBottom: 100 }}
					source={require("../assets/fit-hcmus-logo.png")}
				/>
				<TouchableOpacity
					style={{
						backgroundColor: "#6998f5",
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderRadius: 5,
						marginTop: 5,
						marginBottom: 5,
					}}
					onPress={() => {navigation.navigate("Authorization/LogIn")}}
				>
					<Text style={{ color: "white" }}>Sign In</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderColor: "#6998f5",
						borderWidth: 1,
						borderRadius: 5,
						marginBottom: 5,
					}}
					onPress={() => {navigation.navigate("Authorization/Register")}}
				>
					<Text style={{ color: "#6998f5" }}>Register new account</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderColor: "#6998f5",
						borderWidth: 1,
						borderRadius: 5,
						marginBottom: 5,
					}}
				>
					<Text style={{ color: "#6998f5" }}>Sign In with Google</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderColor: "#6998f5",
						borderWidth: 1,
						borderRadius: 5,
						marginBottom: 5,
					}}
					onPress={() => {navigation.navigate("Authorization/ForgotPassword")}}
				>
					<Text style={{ color: "#6998f5" }}>Forgot your password</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AuthorizationHome;
