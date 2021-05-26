import React, { Fragment, useCallback, useEffect, useState, useRef } from "react";
import {
	Text,
	ScrollView,
	ImageBackground,
	View,
	Button,
	ActivityIndicator,
} from "react-native";
import { Video } from "expo-av";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import apiMethods from "../../../http-client/api-methods";
import helper from "../../../helpers";
import Course from "../../../models/course.model";
import FullButton from "../../cores/course/detail/full-button"; 
import Lesson from "../../../models/lesson.model";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";


let StartTime = 0;
let EndTime = 0;
let Count = 0;

const LessonDetail = (props) => {
	const navigation = useNavigation();
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const { processCourses } = applicationReducer;
	const { theme, languageName } = appSettingsReducer;
	const textColor = theme.primaryTextColor;
	const [lessonDetails, setLessonDetails] = useState({});
	const [isLoading, setIsLoading] = useState(new Lesson());
    const route = useRoute();
    const { courseId, lessonId } = route?.params;
	const [isPlaying, setIsPlaying] = useState(false);
	const [endTimeLesson, setEndTimeLesson] = useState(0);
	const [videoUrlToPlay, setVideoUrlToPlay] = useState("http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4");
	const dispatch = useDispatch();
	const videoRef = useRef();

	const _getLessonDetail = async (id) => {
		if (!courseId || !lessonId) return;
		if (!id) id = lessonId;
		setIsLoading(true);

        await Promise.all([
            apiMethods.application.httpGetLessonDetail(courseId, id),
            apiMethods.application.httpGetLessonVideoAndLastSeenTime(courseId, id)
		])
			.then(([result1, result2]) => {
				return [result1.data.payload, result2.data.payload]
			})
            .then(([result1, result2]) => {
				StartTime = result2.currentTime;
				Count = 0;
                setLessonDetails({ ...lessonDetails, 
                    id: result1.id,
                    content: result1.content,
                    hours: result1.hours,
                    name: result1.name,
                    nextLessonId: result1.nextLessonId,
                    numberOrder: result1.numberOrder,
                    prevLessonId: result1.prevLessonId,
                    sectionId: result1.sectionId,
                    videoName: result1.videoName,
                    videoUrl: result2.videoUrl,
                    currentTime: result2.currentTime,
                    isFinish: result2.isFinish 
                });
				setVideoUrlToPlay(result2.videoUrl);
                setIsLoading(false);
            })
            .catch(error => {
                helper.FlashMessageFunc.showGlobalError(error?.response?.data?.message);
                setIsLoading(false);
            });
	};
	
	const _markFinish = async () => {
		await apiMethods.application.httpMarkLessonFinish(lessonId)
			.then(result => console.log(result))
			.catch(error => console.log(error.response)); 
	}

	const _updateCurrentTime = async (currentTime) => {
		console.log("UPDATE CURRENT: ", lessonId, currentTime);
		await apiMethods.application.httpUpdateLessonCurrentTime(lessonId, currentTime)
			.then(result => console.log(result))
			.catch(error => console.log(error.response));
	}

	const _onPlaybackStatusUpdate = playbackStatus => {
		console.log(playbackStatus);
		if (playbackStatus.isPlaying === false) {
			EndTime = playbackStatus.positionMillis;
			console.log("end time: ", EndTime);
		}
		if (playbackStatus.didJustFinish) {
			_markFinish();
		}
	}

    
    const goNextLesson = async () => {
		navigation.navigate("LessonDetail", { lessonId: lessonDetails.nextLessonId, courseId: courseId });
		console.log("lessonId: ", lessonDetails.nextLessonId, "courseId: ", courseId);
		await _getLessonDetail(lessonDetails.nextLessonId);
	}

	const goPreviousLesson = async () => {
		navigation.navigate("LessonDetail", { lessonId: lessonDetails.prevLessonId, courseId: courseId });
		console.log("lessonId: ", lessonDetails.prevLessonId, "courseId: ", courseId);
		await _getLessonDetail(lessonDetails.prevLessonId);
	}
	
	const _useRefCompo = async (component) => {
		const playbackObject = component;
		if (playbackObject && Count === 0) {
			await playbackObject.setStatusAsync({ positionMillis: StartTime });
			Count++;
		}
	}

	useEffect(() => {
		_getLessonDetail();
		return () => {
			console.log("this lesson end at: ", EndTime, StartTime);
			_updateCurrentTime(EndTime);
			setIsPlaying(false);
		}
	}, []);

	return (
		<Fragment>
			{lessonDetails.id && 
				<View
					style={{
						flex: 1,
					}}
				>
					{ videoUrlToPlay.search("https://youtube.com/embed/") !== -1 && <YoutubePlayer
						height={300}
						play={isPlaying}
						videoId={videoUrlToPlay.replace("https://youtube.com/embed/", "")}
						onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}
					/> }

					{  videoUrlToPlay.search("mov", "mp4") !== -1 && <Video
						source={{
							uri: videoUrlToPlay,
						}}
						rate={1.0}
						volume={1.0}
						isMuted={false}
						resizeMode="contain"
						playing={isPlaying}
						style={{ height: "40%" }}
						useNativeControls={true}
						ref={(component) => _useRefCompo(component)}
						onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}			
					/> }
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
							{lessonDetails.name}
						</Text>
						{ lessonDetails.prevLessonId && <FullButton 
							buttonName={languageName == "vietnamese" ? `Xem bài học trước` : `Move to previous lesson`}
							handlePress={() => goPreviousLesson()}
						/> }
                        { lessonDetails.nextLessonId && <FullButton 
                            buttonName={languageName == "vietnamese" ? `Xem bài học tiếp theo` : `Move to next lesson`}
                            handlePress={() => goNextLesson()}
                        /> }
					</ScrollView>
				</View>
			}
			{!lessonDetails.id && !isLoading && <View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
				<Text style={{ color: theme.primaryTextColor }}>Không lấy được data của khoá học, thử lại sau nhé!</Text>
			</View>}
			{!lessonDetails.id && isLoading && <View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
				<ActivityIndicator color={theme.primaryTextColor} />
			</View>}
		</Fragment>
	);
};

export default LessonDetail;
