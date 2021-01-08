import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

const FeatureCard = ({ title, courses }) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("VerticalSectionCourses", { courses: courses });
	};
	return (
		<ImageBackground
			style={{ height: 100, marginTop: 10 }}
			source={{
				uri:
					"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/5e41e3c7_3174_472a_b85c_ffe35dc7250f_bccff069-05e4-4991-81a5-764ca41e10ad.jpg",
			}}
		>
			<TouchableOpacity
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				onPress={handlePress}
			>
				<Text
					style={{
						fontSize: 24,
						color: "white",
						fontWeight: "bold",
						textAlign: "center",
					}}
				>
					{title}
				</Text>
			</TouchableOpacity>
		</ImageBackground>
	);
};

export default FeatureCard;
