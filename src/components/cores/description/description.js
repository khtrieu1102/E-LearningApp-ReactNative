import React, { useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const Description = ({ description }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;

	const [isShowFullDescription, setIsShowFullDescription] = useState(true);
	const [lineToShow, setLineToShow] = useState(3);

	const toggleDescription = () => {
		setIsShowFullDescription(!isShowFullDescription);
		if (isShowFullDescription) setLineToShow(10);
		else setLineToShow(3);
	};

	return (
		<View style={{ paddingTop: 10 }}>
			<Text numberOfLines={lineToShow} style={{ fontSize: 16, color: textColor }}>
				{description || "Đây là môt lĩnh vực được phát triển bởi team LetStudy"}
				{"\n"}
			</Text>
			<Text style={{ color: "blue" }} as="button" onPress={toggleDescription}>
				{!isShowFullDescription ? "Less" : "More"}
			</Text>
		</View>
	);
};

export default Description;
