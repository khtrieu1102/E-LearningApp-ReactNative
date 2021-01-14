import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../../../redux/action-creators";
import helpers from "../../../helpers";

const ForgotPassword = () => {	
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const dispatch = useDispatch();

	const { theme } = appSettingsReducer;

	const navigation = useNavigation();

	const [formData, setFormData] = useState({
		email: ""
	});

	const onSubmit = () => {
		if (formData.email == "") {
			return helpers.FlashMessageFunc.showSimpleError("Please type your email to get code for reset password!");
		}
		
		const isValidEmail = helpers.Validation.validateEmail(formData.email);
		if (isValidEmail != true) {
			return helpers.FlashMessageFunc.showSimpleError("This email is not valid, please try again!");
		}

		// --- Calling api
		dispatch(actionCreators.authorization.emailResetPassword(formData.email));
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
						style={{ height: 50, paddingBottom: 100 }}
						source={require("../assets/fit-hcmus-logo.png")}
					/>
				<Text style={{ color: theme.primaryTextColor }}>Your registered email</Text>
				<TextInput
					style={{
						borderColor: theme.primaryTextColor,
						borderWidth: 1,
						borderRadius: 5,
						height: 40,
						color: theme.primaryTextColor,
						marginBottom: 5,
						paddingLeft: 5,
					}}
					onChangeText={(text) => setFormData({...formData, email: text})}
					defaultValue={formData.email}
				/>
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
					onPress={() => onSubmit()}
				>
					<Text style={{ color: "white" }}>Get code to reset password</Text>
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
					onPress={() => {navigation.navigate("Authorization/Register")}}
				>
					<Text style={{ color: theme.secondaryTextColor }}>Register new account</Text>
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
			</View>
		</View>
	);
};

export default ForgotPassword;
