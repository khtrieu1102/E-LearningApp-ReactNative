import React from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths"

const Home = (props) => {
	const backgroundColor = "white";
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: backgroundColor,
			}}
		>
			<HorizontalSectionCourses header="Continue Learning" />
			<HorizontalSectionPaths header="Paths" />
			<HorizontalSectionCourses header="Channels" />
			<HorizontalSectionCourses header="Bookmarks" />
		</ScrollView>
	);
};

export default Home;
