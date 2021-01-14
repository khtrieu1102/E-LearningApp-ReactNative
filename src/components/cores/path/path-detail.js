import React, { useEffect, useState } from "react";
import { Text, ScrollView, Image, View, TouchableOpacity } from "react-native";
import VerticalSectionCourses from "../section-courses/vertical-section-courses";
import Description from "../description/description";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import apiMethods from "../../../http-client/api-methods";
import helper from "../../../helpers";

const PathDetail = ({ }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;
	const backgroundColor = theme.primaryBackgroundColor;
	const [ isLoading, setIsLoading ] = useState(false);
	const [ data, setData ] = useState(null);
	
	const route = useRoute();
	const {
		id,
		name,
	} = route?.params?.pathDetails;

	const _getAllCourses = async () => {
		setIsLoading(true);
		await apiMethods.application.httpGetCoursesFromCategory(id)
			.then(result => result?.data?.payload)
			.then(result => {
				console.log(result);
				setData(result);
				setIsLoading(false);
			})
			.catch(error => {
				helper.FlashMessageFunc.showGlobalError(error?.response?.data?.message);
				setIsLoading(false);
			});
	}

	useEffect(() => {
		_getAllCourses();
		return () => {
		}
	}, []);


	return (
		<ScrollView
			style={{ flex: 1 }}
		>
			<View
				style={{
					flexDirection: "row",
					paddingTop: 10,
				}}
			>
				<View
					style={{
						width: "100%",
						backgroundColor: backgroundColor,
						flexDirection: "row",
						justifyContent: "flex-start",
						marginBottom: 10,
					}}
				>
					<Image
						source={{
							uri:
								"https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
						}}
						style={{ width: 80, height: 60, maxWidth: "30%" }}
					/>
					<View style={{ paddingLeft: 10, maxWidth: "70%", paddingRight: 10 }}>
						<Text
							style={{
								fontWeight: "bold",
								marginBottom: 5,
								fontSize: 20,
								color: textColor
							}}
							numberOfLines={2}
						>
							{name}
						</Text>
						<Text style={{ color: "#979ba1", fontSize: 14, paddingTop: 3 }}>
							 {data && data.count} courses
						</Text>
					</View>
				</View>
			</View>
			{data && <Description />}
			<VerticalSectionCourses courses={data && data.rows} />
		</ScrollView>
	);
};

export default PathDetail;
