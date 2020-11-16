import React from "react";
import { ImageBackground, ScrollView } from "react-native";

import HorizontalSectionPaths from "../section-paths/horizontal-section-paths";
import HorizontalSectionAuthors from "../section-authors/horizontal-section-authors";
import HorizontalSectionCourses from "../section-courses/horizontal-section-courses";
import SectionSkillsHeader from "./section-skills-header";
import SimpleSkillItem from "../skill/simple-skill-item";

const FullSkillTopic = ({ header, itemsList, navigation }) => {
	const skills = [
		{ id: 1, skillName: "react" },
		{ id: 2, skillName: "javascript" },
		{ id: 3, skillName: "mobile" },
		{ id: 4, skillName: "angular" },
		{ id: 5, skillName: "website" },
		{ id: 6, skillName: "design" },
		{ id: 7, skillName: "flux" },
		{ id: 8, skillName: "react-redux" },
	];

	return (
		<ScrollView style={{ paddingLeft: 10 }}>
			<ImageBackground
				style={{ height: 100, marginRight: 10 }}
				source={{
					uri:
						"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/5e41e3c7_3174_472a_b85c_ffe35dc7250f_bccff069-05e4-4991-81a5-764ca41e10ad.jpg",
				}}
			/>
			<SectionSkillsHeader header="Popular skills" />
			<ScrollView horizontal={true}>
				{skills.map((skill, index) => (
					<SimpleSkillItem key={index} skillDetails={skill} />
				))}
			</ScrollView>
			<HorizontalSectionPaths	header="Paths"/>
			<HorizontalSectionCourses header="New" />
			<HorizontalSectionCourses header="Trending" />
			<HorizontalSectionAuthors header="Top Authors" />
		</ScrollView>
	);
};

export default FullSkillTopic;
