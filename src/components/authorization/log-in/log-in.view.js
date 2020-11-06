import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Login = () => {	
	const navigation = useNavigation();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const textColor = "black";
	const onSubmit = () => {
		console.log(formData.email, formData.password);
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
			<Text style={{ color: textColor }}>Email</Text>
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
			<Text style={{ color: textColor }}>Password</Text>
			<View
				style={{
					flexDirection: "row",
					borderWidth: 1,
					borderColor: textColor,
					borderRadius: 5,
					marginBottom: 5,
				}}
			>
				<Ionicons
					style={{ justifyContent: "center", paddingLeft: 5, paddingRight: 5 }}
					name="md-eye-off"
					size={40}
					color={textColor}
				/>
				<TextInput
					style={{
						flex: 1,
						borderRadius: 5,
						height: 40,
						paddingLeft: 5,
                        color: textColor,
					}}
					onChangeText={(text) => setFormData({...formData, password: text})}
					defaultValue={formData.password}
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
				onPress={() => onSubmit()}
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
				<Text style={{ color: "#6998f5" }}>Forgot your password?</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
