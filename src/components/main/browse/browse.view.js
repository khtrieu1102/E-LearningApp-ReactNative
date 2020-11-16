import React from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths";
import HorizontalSectionAuthors from "../../cores/section-authors/horizontal-section-authors"

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
			<HorizontalSectionPaths header="ABC" />
			<HorizontalSectionAuthors header="Author" />
		</ScrollView>
	);
};

export default Browse;
