import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
	Text,
	ScrollView,
	ImageBackground,
	View,
	TouchableOpacity,
	Button,
	ActivityIndicator,
} from "react-native";
import { Video } from "expo-av";
import FullButton from "../detail/full-button";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import AuthorSimpleItem from "../../author/author-simple"
import Actions from "./action-buttons";
import Details from "./content-and-transcript";
import RatingStarBox from "../rating-star-box";
import apiMethods from "../../../../http-client/api-methods";
import helper from "../../../../helpers";
import Course from "../../../../models/course.model";
import actionCreators from "../../../../redux/action-creators";
import Ratings from "../../ratings/ratings";

const CourseDetail = () => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const { processCourses } = applicationReducer;
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;
	const [courseDetails, setCourseDetails] = useState(new Course({}));
	const [isLoading, setIsLoading] = useState(false);
	const route = useRoute();
	const [isPlaying, setIsPlaying] = useState(false);
	const [isInProcessCourses, setIsInProcessCourses] = useState(false);
	const dispatch = useDispatch();

	const _getCourseDetail = async () => {
		if (!route?.params?.courseId) return;
		setIsLoading(true);
		await apiMethods.application.httpGetCourseFullDetail(route?.params?.courseId)
			.then(result => result.data.payload)
			.then(result => {
				const data = new Course(result);
				setCourseDetails(data);
				setIsLoading(false);
				const checkInProcess = processCourses.findIndex(t => t.id == route?.params?.courseId);
				if (checkInProcess != -1) {
					setIsInProcessCourses(true);
				}
			})
			.catch(error => {
				helper.FlashMessageFunc.showGlobalError(error?.response?.data?.message);
				setIsLoading(false);
			});
	};
	
	const buyCourse = async () => {
		if (courseDetails.price == 0) {
			await apiMethods.application.httpRegisterFreeCourse(courseDetails.id)
				.then(result => result?.data)
				.then(result => {
					if (result?.messsage == "OK") {
						setIsInProcessCourses(true);
					}
				})
				.catch();
			}
			else {
				console.log("Too expensive");
			}
		await dispatch(actionCreators.application.httpGetProcessCourses());
		await _getCourseDetail();
	}

	useEffect(() => {
		_getCourseDetail();
		return () => {
			setIsPlaying(false);
		}
	}, []);

	return (
		<Fragment>
			{courseDetails.id && 
				<View
					style={{
						flex: 1,
					}}
				>
					<Video
							source={{
								uri: courseDetails.promoVidUrl || "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
							}}
							rate={1.0}
							volume={1.0}
							isMuted={false}
							resizeMode="contain"
							playing={isPlaying}
							isLooping
							style={{ height: "40%" }}
							useNativeControls={true}
						/>
					<ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
						<Text
							style={{
								fontWeight: "bold",
								marginBottom: 5,
								fontSize: 28,
								color: textColor
							}}
							numberOfLines={3}
						>
							{courseDetails.title}
						</Text>
						<AuthorSimpleItem authorDetails={courseDetails.instructor} />
						<Text style={{ color: "#979ba1", fontSize: 14, paddingTop: 3 }}>
							{new Date(courseDetails.createdAt).toDateString()} - {Number((courseDetails.totalHours*1).toFixed(2))}h
						</Text>
						<RatingStarBox StarPoint={courseDetails.presentationPoint} />
						<Actions
							description={courseDetails.description}
							courseId={courseDetails.id}
							coursesLikeCategory={courseDetails.coursesLikeCategory}
						/>
						{ isInProcessCourses && <Details section={courseDetails.section} /> }
						{ !isInProcessCourses && 
							<FullButton 
								buttonName={`Get this course now with ${courseDetails.price} VND!`} 
								handlePress={buyCourse}
							/>
						}
						<Ratings ratings={courseDetails.ratings} />
					</ScrollView>
				</View>
			}
			{!courseDetails.id && !isLoading && <View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
				<Text style={{ color: theme.primaryTextColor }}>Không lấy được data của khoá học, thử lại sau nhé!</Text>
			</View>}
			{!courseDetails.id && isLoading && <View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
				<ActivityIndicator color={theme.primaryTextColor} />
			</View>}
		</Fragment>
	);
};

export default CourseDetail;
