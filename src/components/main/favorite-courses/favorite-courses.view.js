import React from "react";
import { View, ScrollView } from "react-native";

import VerticalSectionCourses from "../../cores/section-courses/vertical-section-courses"

const FavoriteCourses = (props) => {
	const backgroundColor = "white";
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<VerticalSectionCourses />
		</View>
	);
};

export default FavoriteCourses;
