import React, { useState, useEffect } from "react";
import { Text, Image, View, Button, ScrollView } from "react-native";
import { useSelector } from "react-redux"
import { useRoute } from "@react-navigation/native";
import VerticalSectionCourses from "../section-courses/vertical-section-courses";
import Description from "../description/description";
import apiMethods from "../../../http-client/api-methods";

const AuthorDetail = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme, languageName } = appSettingsReducer;
	const textColor = theme.primaryTextColor;
	const [ authorDetails, setAuthorDetails ] = useState(null);
	const route = useRoute();
	const [ isLoading, setIsLoading ] = useState(false);

	const _getAuthorDetail = async () => {
		if (!route?.params?.authorId) return;
		setIsLoading(true);
		await apiMethods.application.httpGetSpecificInstructor(route?.params?.authorId)
			.then(result => result?.data?.payload)
			.then(result => {
				setAuthorDetails(result);
			})
			.catch(error => {
				helper.FlashMessageFunc.showGlobalError(error?.response?.data?.message);
			});
		setIsLoading(false);
	}

	useEffect(() => {
		_getAuthorDetail();
		return () => {

		}
	}, []);


	return (
		<View>
			{ authorDetails && 
			<ScrollView>
				<View
					style={{
						alignItems: "center",
						alignContent: "center",
					}}
				>
					<Image
						source={{
							uri:
								authorDetails["avatar"] || "https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
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
						{authorDetails["name"]}
					</Text>
					<Text
						style={{
							alignSelf: "center",
							fontSize: 14,
							paddingBottom: 10,
							color: textColor
						}}
					>
						{authorDetails["major"]} - {authorDetails["totalCourse"]} {languageName == "vietnamese" ? "khoá học" : "courses"}
					</Text>
					<Button
						style={{
							alignSelf: "center",
							textAlign: "center",
							fontSize: 14,
							width: 80,
							backgroundColor: "blue",
						}}
						title={languageName == "vietnamese" ? "Theo dõi" : "Follow"}
					/>
				</View>
				<VerticalSectionCourses header={ languageName == "vietnamese" ? "Khoá học phụ trách" : "In-charge Courses" } courses={authorDetails["courses"]} />
			</ScrollView> }
		</View>
	);
};

export default AuthorDetail;
