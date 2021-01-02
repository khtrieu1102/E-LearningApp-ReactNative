import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FullWidthButton from "../../cores/material/full-width-button"
import { useDispatch } from "react-redux";
import actionCreators from "../../../redux/action-creators";

const Settings = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	return (
		<View style={{flex: 1, flexDirection: "column"}}>
			<FullWidthButton text="Profile Information" onPress={() => navigation.navigate("Settings/UserProfile")}/>
			<FullWidthButton text="Change your Email" onPress={() => navigation.navigate("Settings/EmailUpdateForm")}/>
			<FullWidthButton text="Change your Password" onPress={() => navigation.navigate("Settings/PasswordUpdateForm")}/>
			<FullWidthButton text="Choose theme" onPress={() => navigation.navigate("Settings/ThemeSettings")}/>
			<FullWidthButton text="Language" onPress={() => navigation.navigate("Settings/LanguageSettings")}/>
			<FullWidthButton text="More Setting" onPress={() => console.log("HE")}/>
			<TouchableOpacity
				style={{
					alignItems: "center",
					justifyContent: "center",
					height: 40,
					borderColor: "red",
					borderWidth: 1,
					borderRadius: 5,
					marginTop: 5,
				}}
				onPress={() => { dispatch(actionCreators.authorization.userLogout()); }}
			>
				<Text style={{ color: "red" }}>LOG OUT</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Settings;
