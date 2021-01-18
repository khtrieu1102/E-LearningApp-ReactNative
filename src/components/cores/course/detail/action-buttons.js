import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import apiMethods from "../../../../http-client/api-methods";
import actionCreators from "../../../../redux/action-creators";

import Description from "../../description/description";
import CircleButton from "./circle-button";
import FullButton from "./full-button";
import helpers from "../../../../helpers";

const Actions = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;
	const dispatch = useDispatch();
	const backgroundColor = theme.primaryBackgroundColor;

	const navigation = useNavigation();
	const { description, courseId, coursesLikeCategory } = props;

	const [ courseIsInFavorite, setCourseIsInFavorite ] = useState(false);
	const handlePress = () => {
		console.log("Go to author name");
		// navigation.navigate("AuthorDetail", { authorDetails: authorDetails });
	};

	const showRelevantCourses = () => {
		navigation.navigate("VerticalSectionCourses", { courses: coursesLikeCategory })
	}

	const _checkCourseIsInFavorite = async () => {
		await apiMethods.application.httpGetCourseFavoriteStatus(courseId)
			.then(result => result?.data?.likeStatus)
			.then(result => {
				setCourseIsInFavorite(result);
			}).catch(error => {
				console.log(error);
			})
	}

	const onInteractWithFavorite = async () => {
		await apiMethods.application
			.httpLikeCourse(courseId)
			.then(async (result) => {
				_checkCourseIsInFavorite();
			})
			.catch(error => {
				helpers.FlashMessageFunc.showSimpleError("Không thể hoàn thành tác vụ, hãy thử lại sau!");
			});
	}

	useEffect(() => {
		_checkCourseIsInFavorite();

		return () => {

		}
	}, [])
	
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingTop: 10,
				}}
			>
				<CircleButton 
					handlePress={() => onInteractWithFavorite()} 
					iconName="ios-heart" 
					iconColor={courseIsInFavorite ? "red" : "#8a92a1"}
					buttonName={courseIsInFavorite ? "Unlike" : "Like"}
					textColor={textColor}
				/>
				<CircleButton 
					handlePress={handlePress} 
					iconName="md-chatbubbles" 
					iconColor="#8a92a1" 
					buttonName="Review" 
					textColor={textColor}
				/>
				<CircleButton 
					handlePress={handlePress} 
					iconName="ios-download" 
					iconColor="#8a92a1" 
					buttonName="Download" 
					textColor={textColor}
				/>
			</View>
			<Description description={description} />
			<View
				style={{
					flexDirection: "column",
					paddingTop: 10,
				}}
			>
				<FullButton
					buttonName="Related paths & courses"
					handlePress={showRelevantCourses}
				/>
				<FullButton
					buttonName="Take a learning check"
					handlePress={handlePress}
				/>
			</View>
		</>
	);
};

export default Actions;
