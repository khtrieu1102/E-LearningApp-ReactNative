import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import actionCreators from '../../../redux/action-creators';

const Login = () => {	
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const dispatch = useDispatch();

	const navigation = useNavigation();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const onSubmit = () => {
		if (formData.email && formData.password) {
			console.log(formData.email, formData.password);
			dispatch(actionCreators.authorization.setIsAuthenticated(true));
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
				<Text style={{ color: theme.primaryTextColor }}>Email</Text>
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
				<Text style={{ color: theme.primaryTextColor }}>Password</Text>
				<View
					style={{
						flexDirection: "row",
						borderWidth: 1,
						borderColor: theme.primaryTextColor,
						borderRadius: 5,
						marginBottom: 5,
					}}
				>
					<Ionicons
						style={{ justifyContent: "center", paddingLeft: 5, paddingRight: 5 }}
						name="md-eye-off"
						size={40}
						color={theme.primaryTextColor}
					/>
					<TextInput
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
					<Text style={{ color: theme.primaryTextColor }}>Sign In</Text>
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

export default Login;
