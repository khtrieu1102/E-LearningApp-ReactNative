import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import RatingStarBox from "./rating-star-box";


const CourseItemCard = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;

	const navigation = useNavigation();
	const { courseDetails } = props;
	const {
		title,
		level,
		createdAt,
		description,
		totalHours,
		imageUrl,
		presentationPoint
	} = courseDetails;
	const author = courseDetails["instructor.user.name"] || "Author";

	const handlePress = () => {
		navigation.navigate("CourseDetail", { courseDetails: courseDetails });
	};

	return (
		<TouchableOpacity
			style={{
				margin: 10,
				height: 220,
				width: 220,
				backgroundColor: theme.courseItemColor,
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
					uri: imageUrl || "https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
				}}
				style={{ height: "50%" }}
			/>
			<View style={{ margin: 10, height: "30%" }}>
				<Text style={{ fontWeight: "bold" }}>{title}</Text>
				<Text>{author}</Text>
				<Text> 
					{new Date(createdAt).toDateString()} - {Number((totalHours*1).toFixed(2))}h
				</Text>
			</View>
			<RatingStarBox StarPoint={presentationPoint || 0} />
		</TouchableOpacity>
	);
};

export default CourseItemCard;
