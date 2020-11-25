import React from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths";
import HorizontalSectionAuthors from "../../cores/section-authors/horizontal-section-authors"
import FeatureCard from "../../cores/feature/feature-card";
import HorizontalSectionSkills from "../../cores/section-skills/horizontal-section-skills";

const Browse = (props) => {
	return (
		<ScrollView
			style={{
				flex: 1,
			}}
		>
			<FeatureCard title="NEW" />
			<FeatureCard title="RECOMMEND FOR YOU" />
			<HorizontalSectionSkills header="Popular skills" />
			<HorizontalSectionPaths header="ABC" />
			<HorizontalSectionAuthors header="Author" />
		</ScrollView>
	);
};

export default Browse;
