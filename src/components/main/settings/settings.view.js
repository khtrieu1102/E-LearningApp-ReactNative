import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FullWidthButton from "../../cores/material/full-width-button"
import ThemeSettings from "./theme-settings.view"

const Settings = () => {
	const navigation = useNavigation();

	return (
		<View>
			<FullWidthButton text="Profile Information" onPress={() => navigation.navigate("Settings/UserProfile")}/>
			<FullWidthButton text="Choose theme" onPress={() => navigation.navigate("Settings/ThemeSettings")}/>
			<FullWidthButton text="Language" onPress={() => navigation.navigate("Settings/LanguageSettings")}/>
			<FullWidthButton text="More Setting" onPress={() => console.log("HE")}/>
		</View>
	);
};

export default Settings;
