import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ForgotPassword = () => {
	const [formData, setFormData] = useState({
		email: ""
	});
	const textColor = "black";
	const onSubmit = () => {
		console.log(formData);
	}
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
			<Text style={{ color: textColor }}>Your registered email</Text>
			<TextInput
				style={{
					borderColor: textColor,
					borderWidth: 1,
					borderRadius: 5,
                    height: 40,
                    color: textColor,
					marginBottom: 5,
					paddingLeft: 5,
				}}
				onChangeText={(text) => setFormData({...formData, email: text})}
				defaultValue={formData.email}
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
				onPress={() => onSubmit()}
			>
				<Text style={{ color: "white" }}>Get code to reset password</Text>
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
				<Text style={{ color: "#6998f5" }}>Sign In</Text>
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
		</View>
	);
};

export default ForgotPassword;
