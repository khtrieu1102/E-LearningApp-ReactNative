import React, { useCallback, useEffect, useState } from "react";
import {
	Text,
	ScrollView,
	ImageBackground,
	View,
	TouchableOpacity,
	Button
} from "react-native";
import { Video } from "expo-av";

import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthorSimpleItem from "../../author/author-simple"
import Actions from "./action-buttons";
import Details from "./content-and-transcript";

const CourseDetail = ({}) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;

	const route = useRoute();
	const {
		id,
		title,
		author,
		level,
		released,
		duration,
		description,
	} = route.params.courseDetails;
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {

		return () => {
			setIsPlaying(false);
		}
	}, [])

	return (
		<View
			style={{
				flex: 1,
			}}
		>
			
			<Video
					source={{
						uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
					}}
					rate={1.0}
					volume={1.0}
					isMuted={false}
					resizeMode="cover"
					playing={isPlaying}
					isLooping
					style={{ height: 200 }}
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
					{title}
				</Text>
				<AuthorSimpleItem authorName={author} />
				<Text style={{ color: "#979ba1", fontSize: 14, paddingTop: 3 }}>
					{level} - {released} - {duration}
				</Text>
				<Actions
					description={description}
					courseIsInFavorite={false}
				/>
				<Details />
			</ScrollView>
		</View>
	);
};

export default CourseDetail;
