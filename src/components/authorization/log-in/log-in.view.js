import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View
			style={{
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "stretch",
				maxWidth: 500,
				marginLeft: "5%",
				marginRight: "5%",
				height: "100%",
			}}
		>
			<Text style={{ color: "#8a92a1" }}>Email or username</Text>
			<TextInput
				style={{
					borderColor: "white",
					backgroundColor: "#8a92a1",
					borderWidth: 1,
					borderRadius: 5,
					height: 40,
					marginBottom: 5,
					paddingLeft: 5,
				}}
				onChangeText={(text) => setUserName(text)}
				defaultValue={userName}
			/>
			<Text style={{ color: "#8a92a1" }}>Password</Text>
			<View
				style={{
					flexDirection: "row",
					borderWidth: 1,
					borderColor: "white",
					backgroundColor: "#8a92a1",
					borderRadius: 5,
					marginBottom: 5,
				}}
			>
				<Ionicons
					style={{ paddingLeft: 5, paddingRight: 5 }}
					name="md-eye-off"
					size={32}
					color="white"
				/>
				<TextInput
					style={{
						flex: 1,
						backgroundColor: "#8a92a1",
						borderRadius: 5,
						height: 40,
						paddingLeft: 5,
					}}
					onChangeText={(text) => setPassword(text)}
					defaultValue={password}
				/>
			</View>
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
					justifyContent: "center",
					height: 40,
					marginBottom: 5,
				}}
			>
				<Text
					style={{
						color: "#6998f5",
						textAlign: "center",
						textDecorationLine: "underline",
					}}
				>
					Need helps?
				</Text>
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
				<Text style={{ color: "#6998f5" }}>Use Single Sign-On (SSO)</Text>
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
				<Text style={{ color: "#6998f5" }}>Subscribe to HCMUS</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
