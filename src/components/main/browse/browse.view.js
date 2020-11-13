import React from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"

const Browse = (props) => {
	const backgroundColor = "white";
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: backgroundColor,
			}}
		>
			<HorizontalSectionCourses header="Continue Learning" />
		</ScrollView>
	);
};

export default Browse;
