import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const SectionCoursesHeader = ({ header, onSeeAll, showButtonSeeAll }) => {
	const textColor = "black";
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginTop: 10
			}}
		>
			<Text style={{ fontSize: 18, fontWeight: "bold", color: textColor }}>{header}</Text>
			{showButtonSeeAll && <TouchableOpacity
				style={{
					backgroundColor: "#dedede",
					flexDirection: "row",
					borderRadius: 20,
				}}
				onPress={onSeeAll}
			>
				<Text
					style={{
						flex: 1,
						color: "black",
						alignSelf: "center",
						fontSize: 12,
						paddingLeft: 5,
					}}
				>
					See all
				</Text>
				<Ionicons
					style={{ paddingLeft: 5, paddingRight: 5 }}
					name="ios-arrow-dropright"
					size={18}
					color="black"
				/>
			</TouchableOpacity>}
		</View>
	);
};

export default SectionCoursesHeader;
