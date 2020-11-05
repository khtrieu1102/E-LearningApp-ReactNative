import React from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"

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
			{/* <SectionPaths navigation={navigation} header="Paths" /> */}
			<HorizontalSectionCourses header="Channels" />
			<HorizontalSectionCourses header="Bookmarks" />
			<HorizontalSectionCourses header="Bookmarks" />
		</ScrollView>
	);
};

export default Home;
