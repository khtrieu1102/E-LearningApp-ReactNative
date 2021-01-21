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
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import apiMethods from "../../../http-client/api-methods";
import helper from "../../../helpers";
import Course from "../../../models/course.model";
import FullButton from "../../cores/course/detail/full-button"; 
import Lesson from "../../../models/lesson.model";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

const LessonDetail = (props) => {
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
	const [videoUrlToPlay, setVideoUrlToPlay] = useState("http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4");
	const dispatch = useDispatch();
	const videoRef = useRef();

	const _getLessonDetail = async () => {
		if (!courseId || !lessonId) return;
		setIsLoading(true);

        await Promise.all([
            apiMethods.application.httpGetLessonDetail(courseId, lessonId),
            apiMethods.application.httpGetLessonVideoAndLastSeenTime(courseId, lessonId)
		])
			.then(([result1, result2]) => {
				return [result1.data.payload, result2.data.payload]
			})
            .then(([result1, result2]) => {
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
    
    const goNextLesson = (component) => {
		console.log(component.positionMillis);
        console.log("next lesson");
	}
	
	const _handleVideoRef = (component) => {
		const playbackObject = component;
		console.log("compoennt: ", component);
		if (playbackObject) {
			playbackObject.playFromPositionAsync(2);
		}
	}

	useEffect(() => {
		_getLessonDetail();
		return () => {
			setIsPlaying(false);
		}
    }, []);

    useEffect(() => {
        console.log(lessonDetails);
        if (lessonDetails.id) {

        }
    }, [lessonDetails])

	return (
		<Fragment>
			{lessonDetails.id && 
				<View
					style={{
						flex: 1,
					}}
				>
					{/* { videoUrlToPlay.search("youtube") !== -1 && <WebView
						style={{flex:1}}

						javaScriptEnabled={true}
						source={{
							uri: videoUrlToPlay,
						}}
					/> } */}

					

					{ videoUrlToPlay.search("https://youtube.com/embed/") !== -1 && <YoutubePlayer
						height={300}
						play={isPlaying}
						videoId={videoUrlToPlay.replace("https://youtube.com/embed/", "")}
					/> }

					{  videoUrlToPlay.search("mov", "mp4") !== -1 &&  <Video
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
						ref={component => _handleVideoRef(component)}
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
							lesson name
						</Text>
                        <FullButton 
                            buttonName={languageName == "vietnamese" ? `Xem bài học tiếp theo` : `Move to next lesson`}
                            handlePress={goNextLesson}
                        />
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
