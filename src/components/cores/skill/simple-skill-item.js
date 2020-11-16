import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

const SimpleSkillItem = ({ skillDetails }) => {
	const navigation = useNavigation();
	
	const handleSimpleSkillPress = () => {
		navigation.navigate("SkillDetail");
	};

	return (
		<TouchableOpacity
			style={{
				backgroundColor: "#dedede",
				flexDirection: "row",
				borderRadius: 20,
				marginRight: 5,
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
				{skillDetails.skillName}
			</Text>
		</TouchableOpacity>
	);
};

export default SimpleSkillItem;
