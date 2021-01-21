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
import { useRoute, useNavigation } from "@react-navigation/native";
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
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import WebView from "react-native-webview";
import { downloadToFolder } from 'expo-file-dl';
import Lesson from "../../../../models/lesson.model";
// import { AndroidImportance, AndroidNotificationVisibility, NotificationChannel, NotificationChannelInput, NotificationContentInput } from 'expo-notifications';

const CourseDetail = () => {
	const navigation = useNavigation();
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const { processCourses } = applicationReducer;
	const { theme, languageName } = appSettingsReducer;
	const textColor = theme.primaryTextColor;
	const [courseDetails, setCourseDetails] = useState(new Course({}));
	const [lastLessonDetails, setLastLessonDetails] = useState(new Lesson({}));
	const [isLoading, setIsLoading] = useState(false);
	const route = useRoute();
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoUrlToPlay, setVideoUrlToPlay] = useState("http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4");
	const [isInProcessCourses, setIsInProcessCourses] = useState(false);
	const dispatch = useDispatch();

	const _getCourseDetail = async () => {
		if (!route?.params?.courseId) return;
		setIsLoading(true);
		await Promise.all([
			apiMethods.application.httpGetCourseFullDetail(route?.params?.courseId),
			apiMethods.application.httpGetLastSeenLessonOfCourse(route?.params?.courseId),
		])
			.then(([result1, result2]) => {
				return [result1.data.payload, result2.data.payload];
			})
			.then(([result1, result2]) => {
				const data = new Course(result1);
				setCourseDetails(data);
				setVideoUrlToPlay(data.promoVidUrl);
				const checkInProcess = processCourses.findIndex(t => t.id == route?.params?.courseId);
				if (checkInProcess != -1) {
					setIsInProcessCourses(true);
				}
				const data2 = new Lesson(result2);
				setLastLessonDetails(data2);
				setIsLoading(false);
			})
			.catch(error => {
				helper.FlashMessageFunc.showGlobalError(error?.response?.data?.message);
				setIsLoading(false);
			})
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

	const downloadCurrentLesson = async () => {
		console.log(courseDetails.promoVidUrl);
		// Downloading the file
		let fileLocation = FileSystem.documentDirectory + "download/";
		console.log(fileLocation);
		// await downloadToFolder({ uri: courseDetails.promoVidUrl }, courseDetails.promoVidUrl, fileLocation, "download");
	}

	const getPermissions = async () => {
		await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
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
							uri: videoUrlToPlay,
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
							downloadCurrentLesson={downloadCurrentLesson}
						/>
						{ isInProcessCourses && 
							<View>
								<FullButton 
									buttonName={languageName == "vietnamese" ? `Xem tiếp bài học gần nhất` : `Continue learning last lesson`}
									handlePress={() => navigation.navigate("LessonDetail", { courseId: route?.params?.id, lessonId: lastLessonDetails.id })}
								/>
								<Details section={courseDetails.section} courseId={courseDetails.id} />
							</View>
						}
						{ !isInProcessCourses && 
							<View>								
								<FullButton 
									buttonName={languageName == "vietnamese" ? `Tham gia khoá học với ${courseDetails.price} VND!` : `Get this course now with ${courseDetails.price} VND!`}
									handlePress={buyCourse}
								/>
							</View>
						}
						<Ratings courseId={courseDetails.id} ratings={courseDetails.ratings} isInProcessCourses={isInProcessCourses} downloadCurrentLesson={downloadCurrentLesson} />
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
