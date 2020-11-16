import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FullWidthButton from "../../cores/material/full-width-button"

const Settings = () => {
	return (
		<View
			style={{
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "stretch",
				height: "100%",
			}}
		>
			<FullWidthButton text="Profile Information" onPress={() => console.log("HE")}/>
			<FullWidthButton text="Application Theme" onPress={() => console.log("HE")}/>
			<FullWidthButton text="Language" onPress={() => console.log("HE")}/>
			<FullWidthButton text="More Setting" onPress={() => console.log("HE")}/>
		</View>
	);
};

export default Settings;
