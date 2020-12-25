import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux";

import apiMethods from "../../../http-client/api-methods";
import helpers from "../../../helpers";
import axios from 'axios';
import httpClient from "../../../http-client/config/http-client";

import { showMessage, hideMessage } from "react-native-flash-message";

const Register = () => {
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const navigation = useNavigation();
	const [formMessage, setFormMessage] = useState({
		isError: false,
		isSuccess: false,
		errorMessage: "",
	});
	const [formData, setFormData] = useState({
		username: "trieu",
		email: "khactrieu98@gmail.com",
		phone: "0903020202",
		password: "12",
		retypePassword: "12",
	});

	const onSubmit = async () => {
		// Validate password fields
		if (formData.password != formData.retypePassword) {
			setFormMessage({...formMessage, isError: true, errorMessage: "Password and Password Retype are not match! Try again!"})
			return;
		}
		// Validate if there is any blank field
		if (formData.username == "" || formData.email == "" || formData.phone == "" || formData.password == "") {
			setFormMessage({...formMessage, isError: true, errorMessage: "Please fill in all input fields to complete form!"})
			return;
		}
		// Validate email is valid
		const emailIsValid = helpers.validateEmail(formData.email);
		if (emailIsValid == false) {
			setFormMessage({...formMessage, isError: true, errorMessage: "Your email is invalid! Try again!"})
			return;
		}

		// --- Everything seems okay, refresh error message then call api
		setFormMessage({...formMessage, isError: false, errorMessage: ""});
		await apiMethods.authorization
			.userRegister(formData.username, formData.password, formData.email, formData.phone)
			.then(result => console.log(result))
			.catch(error => {
				if (error.response && error.response.data) {
					setFormMessage({...formMessage, isError: true, errorMessage: error.response.data.message});
					showMessage({
						message: "ERROR!",
						description: error.response.data.message,
						type: "danger",
					});
				}
			});
	}


	const requestRegisterCode = async () => {
		await apiMethods.authorization
		.getRegisterCode(formData.email)
		.then(result => console.log(result))
		.catch(error => {
			if (error.response && error.response.data) {
				setFormMessage({...formMessage, isError: true, errorMessage: error.response.data.message});
			}
		});
	}

	const styles = {
		PasswordInputStyle: {
			flexDirection: "row",
			borderWidth: formMessage.isError ? 2 : 1,
			borderColor: formMessage.isError ? "red" : theme.primaryTextColor,
			borderRadius: 5,
			marginBottom: 5,
		},
		InputStyle: {
			borderColor: formMessage.isError ? "red" : theme.primaryTextColor,
			borderWidth: formMessage.isError ? 2 : 1,
			borderRadius: 5,
			height: 40,
			color: theme.primaryTextColor,
			marginBottom: 5,
			paddingLeft: 5,
		}
	}
	
	return (
		<View style={{flex: 1, alignItems: "center", backgroundColor: theme.primaryBackgroundColor}}>
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
				<Text style={{ color: theme.primaryTextColor }}>Username</Text>
				<TextInput
					style={styles.InputStyle}
					onChangeText={(text) => setFormData({...formData, username: text})}
					defaultValue={formData.username}
				/>
				<Text style={{ color: theme.primaryTextColor }}>Email</Text>
				<TextInput
					style={styles.InputStyle}
					onChangeText={(text) => setFormData({...formData, email: text})}
					defaultValue={formData.email}
				/>
				<Text style={{ color: theme.primaryTextColor }}>Phone Number</Text>
				<TextInput
					style={styles.InputStyle}
					onChangeText={(text) => setFormData({...formData, phone: text})}
					defaultValue={formData.phone}
				/>
				<Text style={{ color: theme.primaryTextColor }}>Password</Text>
				<View
					style={styles.PasswordInputStyle}
				>
					<Ionicons
						style={{ justifyContent: "center", paddingLeft: 5, paddingRight: 5 }}
						name="md-eye-off"
						size={40}
						color={theme.primaryTextColor}
					/>
					<TextInput
						secureTextEntry={true}
						style={{
							flex: 1,
							borderRadius: 5,
							height: 40,
							paddingLeft: 5,
							color: theme.primaryTextColor,
						}}
						onChangeText={(text) => setFormData({...formData, password: text})}
						defaultValue={formData.password}
					/>
				</View>
				<Text style={{ color: theme.primaryTextColor }}>Retype password</Text>
				<View
					style={styles.PasswordInputStyle}
				>
					<Ionicons
						style={{ justifyContent: "center", paddingLeft: 5, paddingRight: 5 }}
						name="md-eye-off"
						size={40}
						color={theme.primaryTextColor}
					/>
					<TextInput
						secureTextEntry={true}
						style={{
							flex: 1,
							borderRadius: 5,
							height: 40,
							paddingLeft: 5,
							color: theme.primaryTextColor,
						}}
						onChangeText={(text) => setFormData({...formData, retypePassword: text})}
						defaultValue={formData.retypePassword}
					/>
				</View>
				{formMessage.isError && <Text style={{ color: "red", fontSize: 10 }}>{formMessage.errorMessage}</Text>}
				<TouchableOpacity onPress={requestRegisterCode}>
					<Text style={{ color: "blue", textDecorationLine: "underline", fontSize: 15 }}>Send verify code again!</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						backgroundColor: theme.secondaryBackgroundColor,
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderRadius: 5,
						marginTop: 5,
						marginBottom: 5,
					}}
					onPress={onSubmit}
				>
					<Text style={{ color: "white" }}>Register new account</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderColor: theme.secondaryBackgroundColor,
						borderWidth: 1,
						borderRadius: 5,
						marginBottom: 5,
					}}
					onPress={() => {navigation.navigate("Authorization/LogIn")}}
				>
					<Text style={{ color: theme.secondaryTextColor }}>Sign In</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderColor: theme.secondaryBackgroundColor,
						borderWidth: 1,
						borderRadius: 5,
						marginBottom: 5,
					}}
				>
					<Text style={{ color: theme.secondaryTextColor }}>Sign In with Google</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderColor: theme.secondaryBackgroundColor,
						borderWidth: 1,
						borderRadius: 5,
						marginBottom: 5,
					}}
					onPress={() => {navigation.navigate("Authorization/ForgotPassword")}}
				>
					<Text style={{ color: theme.secondaryTextColor }}>Forgot your password?</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Register;
