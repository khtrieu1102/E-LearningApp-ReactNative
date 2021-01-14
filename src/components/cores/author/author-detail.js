import React from "react";
import { Text, ScrollView, Image, View, Button } from "react-native";
import { useSelector } from "react-redux"
import { useRoute } from "@react-navigation/native";
import VerticalSectionCourses from "../section-courses/vertical-section-courses";
import Description from "../description/description";

const AuthorDetail = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;

	const route = useRoute();
	const authorDetails = route?.params?.authorDetails;

	const description = `Giảng viên tại LetStudy, chuyên ngành: ${authorDetails.major}`;

	return (
		<View
			style={{ flex: 1}}
		>
			<View
				style={{
					alignItems: "center",
					alignContent: "center",
					justifyContent: "center",
				}}
			>
				<Image
					source={{
						uri:
							authorDetails["user.avatar"] || "https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
					}}
					style={{ borderRadius: 50, width: 80, height: 80 }}
				/>
				<Text
					style={{
						alignSelf: "center",
						paddingTop: 5,
						fontWeight: "bold",
						fontSize: 17,
						color: textColor
					}}
				>
					{authorDetails["user.name"]}
				</Text>
				<Text
					style={{
						alignSelf: "center",
                        fontSize: 14,
                        paddingBottom: 10,
						color: textColor
					}}
				>
					{authorDetails["user.type"]}
				</Text>
				<Button
					style={{
						alignSelf: "center",
						textAlign: "center",
						fontSize: 14,
						width: 80,
						backgroundColor: "blue",
					}}
					title="Follow"
				>
					Follow
				</Button>
				<Text
					style={{
						alignSelf: "center",
						textAlign: "center",
						marginTop: 10,
						fontSize: 14,
						color: textColor
					}}
				>
					Follow to be notified when new courses are published
				</Text>
			</View>
			<Description description={description} />
			<VerticalSectionCourses />
		</View>
	);
};

export default AuthorDetail;
