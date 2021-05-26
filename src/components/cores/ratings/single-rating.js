import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import RatingStarBox from "../course/rating-star-box";

const SingleRating = ({ ratingDetails }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;

	const {
		user,
		averagePoint,
		content
	} = ratingDetails;

	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "flex-start",
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				<Image
					source={{
						uri:
							user["avatar"] || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
					}}
					style={{ width: 50, height: 50, maxWidth: "30%", borderRadius: 50 }}
				/>
				<View style={{ paddingLeft: 10, maxWidth: "70%", paddingRight: 10 }}>
					<Text
						style={{
							fontWeight: "bold",
							color: theme.primaryTextColor
						}}
					>
						{user["name"]}
					</Text>
					<Text style={{ color: "#979ba1", fontSize: 11, paddingTop: 3 }}>
						"{content}"
					</Text>
					<RatingStarBox StarPoint={averagePoint} />
				</View>
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

export default SingleRating;
