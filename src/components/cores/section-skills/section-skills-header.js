import React from "react";
import { View, Text } from "react-native";

import { useSelector } from "react-redux"

const SectionSkillsHeader = ({ header }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				paddingBottom: 10,
			}}
		>
			<Text style={{ fontSize: 18, fontWeight: "bold", color: theme.primaryTextColor }}>{header}</Text>
		</View>
	);
};

export default SectionSkillsHeader;
