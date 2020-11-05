import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const AuthorizationHome = () => {
	return (
		<View style={{flex: 1, alignItems: "center"}}>
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
					<Text style={{ color: "#6998f5" }}>Forgot your password</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AuthorizationHome;
