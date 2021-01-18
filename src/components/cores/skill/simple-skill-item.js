import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

const SimpleSkillItem = ({ skillDetails, onPress }) => {
	const navigation = useNavigation();
	
	const handleSimpleSkillPress = () => {
		if (onPress) {
			onPress();
		}
	};

	return (
		<TouchableOpacity
			style={{
				backgroundColor: "#dedede",
				flexDirection: "row",
				borderRadius: 20,
				marginRight: 5,
				height: 30
			}}
			onPress={handleSimpleSkillPress}
		>
			<Text
				style={{
					flex: 1,
					color: "black",
					alignSelf: "center",
					fontSize: 12,
					paddingTop: 5,
					paddingBottom: 5,
					paddingLeft: 10,
					paddingRight: 10,
				}}
			>
				{skillDetails.content}
			</Text>
		</TouchableOpacity>
	);
};

export default SimpleSkillItem;
