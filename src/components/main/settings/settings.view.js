import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FullWidthButton from "../../cores/material/full-width-button"

const Settings = () => {
	const [isEnabled, setIsEnabled] = useState(false);
  	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	return (
		<View
			style={{
				height: "100%",
			}}
		>
			<FullWidthButton text="Profile Information" onPress={() => console.log("HE")}/>
			<FullWidthButton text="Application Theme" onPress={() => console.log("HE")}/>
			<Switch
				trackColor={{ false: "#767577", true: "#81b0ff" }}
				thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
				ios_backgroundColor="#3e3e3e"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
			<FullWidthButton text="Language" onPress={() => console.log("HE")}/>
			<FullWidthButton text="More Setting" onPress={() => console.log("HE")}/>
		</View>
	);
};

export default Settings;
