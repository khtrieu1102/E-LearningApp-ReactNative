import React from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionPaths from "../section-paths/horizontal-section-paths";
import HorizontalSectionAuthors from "../section-authors/horizontal-section-authors";
import HorizontalSectionCourses from "../section-courses/horizontal-section-courses";

const SkillDetail = ({ header, itemsList }) => {
	return (
		<ScrollView style={{ paddingLeft: 10 }}>
			<HorizontalSectionPaths header="Paths" />
			<HorizontalSectionCourses header="New" />
			<HorizontalSectionCourses header="Trending" />
			<HorizontalSectionAuthors header="Top Authors" />
		</ScrollView>
	);
};

export default SkillDetail;
