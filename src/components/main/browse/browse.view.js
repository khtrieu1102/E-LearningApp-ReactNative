import React from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths";
import HorizontalSectionAuthors from "../../cores/section-authors/horizontal-section-authors"
import FeatureCard from "../../cores/feature/feature-card";
import HorizontalSectionSkills from "../../cores/section-skills/horizontal-section-skills";
import { useSelector, useDispatch } from "react-redux";

const Browse = (props) => {
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const { topNewCourses, topRateCourses, topSellCourses } = applicationReducer;

	return (
		<ScrollView
			style={{
				flex: 1,
			}}
		>
			<FeatureCard title="NEW" courses={topNewCourses} />
			<FeatureCard title="RECOMMEND FOR YOU" courses={topRateCourses} />
			<HorizontalSectionSkills header="Popular skills" />
			<HorizontalSectionPaths header="ABC" />
			<HorizontalSectionAuthors header="Author" />
		</ScrollView>
	);
};

export default Browse;
