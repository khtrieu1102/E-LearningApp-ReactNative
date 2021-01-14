import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import actionCreators from '../../../redux/action-creators';
import helpers from "../../../helpers";
import apiMethods from "../../../http-client/api-methods";

const Login = () => {	
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const authorizationReducer = useSelector((state) => state.authorizationReducer);
	const { isLoading } = authorizationReducer;
	const { theme } = appSettingsReducer;
	const dispatch = useDispatch();

	const navigation = useNavigation();
	const [formData, setFormData] = useState({
		email: "khactrieu98@gmail.com",
		password: "12345678",
	});	
	const [formMessage, setFormMessage] = useState({
		isError: false,
		isSuccess: false,
		errorMessage: "",
	});

	const onSubmit = async () => {
		// Validate if there is any blank field
		if (formData.email == "" || formData.password == "") {
			setFormMessage({...formMessage, isError: true, errorMessage: "Please fill in all input fields to complete form!"});
			return;
		}
		// Validate email is valid
		const emailIsValid = helpers.Validation.validateEmail(formData.email);
		if (emailIsValid == false) {
			setFormMessage({...formMessage, isError: true, errorMessage: "Your email is invalid! Try again!"});
			return;
		}

		// --- Everything seems okay, refresh error message then call api
		setFormMessage({...formMessage, isError: false, errorMessage: ""});
		dispatch(actionCreators.authorization.userLogin(formData.email, formData.password));
	}

	const styles = StyleSheet.create({
		OtherOptionsStyle: {
			alignItems: "center",
			justifyContent: "center",
			height: 40,
			borderColor: theme.secondaryBackgroundColor,
			borderWidth: 1,
			borderRadius: 5,
			marginBottom: 5,
		},
		MainSubmitButtonStyle: {
			backgroundColor: theme.secondaryBackgroundColor,
			alignItems: "center",
			justifyContent: "center",
			height: 40,
			borderRadius: 5,
			marginTop: 5,
			marginBottom: 5,
		},
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
	});

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
						style={{ height: 50, paddingBottom: 100 }}
						source={require("../assets/fit-hcmus-logo.png")}
					/>
				<Text style={{ color: theme.primaryTextColor }}>Email</Text>
				<TextInput
					style={styles.InputStyle}
					onChangeText={(text) => setFormData({...formData, email: text})}
					defaultValue={formData.email}
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
				{formMessage.isError && <Text style={{ color: "red", fontSize: 10 }}>{formMessage.errorMessage}</Text>}
				<TouchableOpacity
					style={styles.MainSubmitButtonStyle}
					onPress={onSubmit}
				>
					<Text style={{ color: "white" }}>
					    {/* {isLoading ? <span>Please wait... <ActivityIndicator /></span> : "Sign In"} */}
						Sign In
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.OtherOptionsStyle}
					onPress={() => {navigation.navigate("Authorization/Register")}}
				>
					<Text style={{ color: theme.secondaryTextColor }}>Register new account</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.OtherOptionsStyle}
				>
					<Text style={{ color: theme.secondaryTextColor }}>Sign In with Google</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.OtherOptionsStyle}
					onPress={() => {navigation.navigate("Authorization/ForgotPassword")}}
				>
					<Text style={{ color: theme.secondaryTextColor }}>Forgot your password?</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;
