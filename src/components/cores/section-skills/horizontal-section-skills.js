import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SectionSkillsHeader from "./section-skills-header";
import SimpleSkillItem from "../skill/simple-skill-item";
import SkillItemCard from "../skill/skill-card-item";

const HorizontalSectionSkills = ({ header }) => {
	const navigation = useNavigation();
	const skills = [
		{ id: 1, content: "react" },
		{ id: 2, content: "javascript" },
		{ id: 3, content: "mobile" },
		{ id: 4, content: "angular" },
		{ id: 5, content: "website" },
		{ id: 6, content: "design" },
		{ id: 7, content: "flux" },
		{ id: 8, content: "react-redux react-redux" },
	];

	const skillTopics = [
		{ id: 1, title: "react" },
		{ id: 2, title: "javascript" },
		{ id: 3, title: "mobile" },
		{ id: 4, title: "angular" },
		{ id: 5, title: "website" },
		{ id: 6, title: "design" },
		{ id: 7, title: "flux" },
		{ id: 8, title: "react-redux" },
	];

	const handleCardSkillPress = () => {
		navigation.navigate("FullSkillTopic");
	};

	return (
		<View style={{ paddingTop: 20 }}>
			<SectionSkillsHeader header={header} />
			<ScrollView horizontal={true}>
				{skills.map((skill, index) => (
					<SimpleSkillItem
						key={index}
						skillDetails={skill}
					/>
				))}
			</ScrollView>
			<ScrollView horizontal={true}>
				{skillTopics.map((topic, index) => (
					<SkillItemCard
						key={index}
						topicDetails={topic}
						handleCardSkillPress={handleCardSkillPress}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default HorizontalSectionSkills;
