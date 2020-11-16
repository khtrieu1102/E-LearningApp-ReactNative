import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SectionSkillsHeader from "./section-skills-header";
import SimpleSkillItem from "../skill/simple-skill-item";
import SkillItemCard from "../skill/skill-card-item";

const HorizontalSectionSkills = ({ header }) => {
	const navigation = useNavigation();
	const skills = [
		{ id: 1, skillName: "react" },
		{ id: 2, skillName: "javascript" },
		{ id: 3, skillName: "mobile" },
		{ id: 4, skillName: "angular" },
		{ id: 5, skillName: "website" },
		{ id: 6, skillName: "design" },
		{ id: 7, skillName: "flux" },
		{ id: 8, skillName: "react-redux react-redux" },
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
		console.log("card");
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
