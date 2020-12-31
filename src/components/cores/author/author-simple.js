import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"

const AuthorSimpleItem = ({ authorName }) => {
	const navigation = useNavigation();
	
	const authorDetails = {
		authorName: authorName,

	}

	const handlePress = () => {
		navigation.navigate("AuthorDetail");
	};

	return (
		<TouchableOpacity
			style={{
				backgroundColor: "#dedede",
				flexDirection: "column",
				borderRadius: 20,
				marginRight: 5,
			}}
			onPress={handlePress}
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
				by {authorName}
			</Text>
		</TouchableOpacity>
	);
};

export default AuthorSimpleItem;
