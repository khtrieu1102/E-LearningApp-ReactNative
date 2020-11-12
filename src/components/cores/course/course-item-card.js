import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CourseItemCard = (props) => {
	const navigation = useNavigation();
	const { courseDetails } = props;
	const {
		title,
		author,
		level,
		released,
		duration,
		description,
	} = courseDetails;

	const handlePress = () => {
		navigation.navigate("CourseDetail", { courseDetails: courseDetails });
	};

	return (
		<TouchableOpacity
			style={{
				marginRight: 20,
				height: 220,
				width: 220,
				backgroundColor: "#ebf2ff",
				shadowColor: "black",
				shadowOffset: {
					width: 5,
					height: 10,
				},
				shadowOpacity: 0.23,
				shadowRadius: 2.62,
			}}
			onPress={handlePress}
		>
			<Image
				source={{
					uri:
						"https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
				}}
				style={{ height: 100 }}
			/>
			<View style={{ marginTop: 10, marginLeft: 10 }}>
				<Text style={{ fontWeight: "bold" }}>{title}</Text>
				<Text>{author}</Text>
				<Text>
					{level} - {released} - {duration}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CourseItemCard;
