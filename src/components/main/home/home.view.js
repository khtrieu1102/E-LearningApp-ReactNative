import React from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths"
import { useSelector, useDispatch } from "react-redux";

const Home = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: theme.primaryBackgroundColor,
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
