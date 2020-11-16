import React from "react";
import { View, Text } from "react-native";

const SectionAuthorsHeader = ({ header, onSeeAll, showButtonSeeAll }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				paddingBottom: 10,
			}}
		>
			<Text style={{ fontSize: 18, fontWeight: "bold" }}>{header}</Text>
		</View>
	);
};

export default SectionAuthorsHeader;
