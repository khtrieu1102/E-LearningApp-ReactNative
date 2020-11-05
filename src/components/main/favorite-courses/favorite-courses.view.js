import React from "react";
import { View, ScrollView } from "react-native";

import VerticalSectionCourses from "../../cores/section-courses/vertical-section-courses"

const FavoriteCourses = (props) => {
	const backgroundColor = "black";
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: backgroundColor,
			}}
		>
			<VerticalSectionCourses header="Your favorite courses" />
		</View>
	);
};

export default FavoriteCourses;
