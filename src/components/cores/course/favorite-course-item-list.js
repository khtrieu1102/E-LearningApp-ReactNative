import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux";
import RatingStarBox from "./rating-star-box";

const FavoriteCourseItemList = ({ courseDetails }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;

	const navigation = useNavigation();
	const {
		courseTitle,
		courseImage,
		instructorName,
		coursePresentationPoint
	} = courseDetails;
	const textColor = theme.primaryTextColor;

	const handlePress = () => {
		navigation.navigate("CourseDetail", { courseId: courseDetails.id });
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
								courseImage || "https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
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
							{courseTitle}
						</Text>
						<Text style={{ color: textColor }}>{instructorName}</Text>
						<RatingStarBox StarPoint={coursePresentationPoint || 0} />
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
		</View>
	);
};

export default FavoriteCourseItemList;
