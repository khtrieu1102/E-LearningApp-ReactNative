import React, { useState } from "react";
import { Text, View } from "react-native";

const Description = ({ description }) => {
	const [isShowFullDescription, setIsShowFullDescription] = useState(true);
	const [lineToShow, setLineToShow] = useState(3);

	const toggleDescription = () => {
		console.log("toggle");
		setIsShowFullDescription(!isShowFullDescription);
		if (isShowFullDescription) setLineToShow(-1);
		else setLineToShow(4);
	};

	return (
		<View style={{ paddingTop: 10 }}>
			<Text numberOfLines={lineToShow} style={{ fontSize: 16 }}>
				{description}
				{"\n"}
			</Text>
			<Text style={{ color: "blue" }} as="button" onPress={toggleDescription}>
				{!isShowFullDescription ? "Less" : "More"}
			</Text>
		</View>
	);
};

export default Description;
