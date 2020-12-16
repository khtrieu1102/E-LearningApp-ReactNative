import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FullWidthButton from "../../cores/material/full-width-button"

const Settings = () => {
	const navigation = useNavigation();

	return (
		<View style={{flex: 1, flexDirection: "column"}}>
			<FullWidthButton text="Profile Information" onPress={() => navigation.navigate("Settings/UserProfile")}/>
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
			>
				<Text style={{ color: "red" }}>LOG OUT</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Settings;
