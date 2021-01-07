import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux";
import RatingStarBox from "./rating-star-box";

const CourseItemList = ({ courseDetails }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;

	const navigation = useNavigation();
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
	const textColor = theme.primaryTextColor;

	const handlePress = () => {
		navigation.navigate("CourseDetail", { courseDetails: courseDetails });
	};

	return (
		<View>
			<View
				style={{
					backgroundColor: "transparent",
					flexDirection: "row",
					margin: 10,
				}}
			>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						justifyContent: "flex-start",
						width: "90%"
					}}
					onPress={handlePress}
				>
					<Image
						source={{
							uri:
								imageUrl || "https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
						}}
						style={{ width: 80, height: 60, maxWidth: "30%" }}
					/>
					<View style={{ paddingLeft: 10, maxWidth: "70%", paddingRight: 10 }}>
						<Text
							style={{
								fontWeight: "bold",
								marginBottom: 5,
								color: textColor
							}}
						>
							{title}
						</Text>
						<Text>{author}</Text>
						<Text style={{ paddingBottom: 5 }}> 
							{new Date(createdAt).toDateString()} - {Number((totalHours*1).toFixed(2))}h
						</Text>
						<RatingStarBox StarPoint={presentationPoint || 0} />
					</View>	
				</TouchableOpacity>

				<TouchableOpacity>
					<Ionicons
						style={{ maxWidth: "10%" }}
						name="ios-more"
						size={20}
						color={textColor}
					/>
				</TouchableOpacity>
			</View>

			<View
				style={{
					backgroundColor: "#cccccc",
					height: 1,
					alignSelf: "stretch",
				}}
			/>
		</View>
	);
};

export default CourseItemList;
