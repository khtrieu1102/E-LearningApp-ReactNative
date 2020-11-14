import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SectionPathsHeader from "./section-paths-header";
import PathCardItem from "../Path/path-card-item";

const HorizontalSectionPaths = (props) => {
	const { header, isMultipleSections } = props;
	const navigation = useNavigation();
	const paths = [
		{
			id: 1,
			pathName: "React",
			amount: 12,
			duration: 4.5,
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 2,
			pathName: "Leadership and Management for: Project Managers",
			amount: 44,
			duration: 4.5,
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 3,
			pathName: "Android and Android simulator",
			amount: 10,
			duration: 4.5,
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 3,
			pathName: "Advanced Website application development",
			amount: 15,
			duration: 4.5,
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
	];

	const onSeeAll = () => {
		navigation.navigate("VerticalSectionPaths", { paths: paths })
	}

	return (
		<View style={{ paddingTop: 20 }}>
			<SectionPathsHeader header={header} onSeeAll={onSeeAll} showButtonSeeAll={true}/>
			<ScrollView horizontal={true}>
				{paths.map((path, index) => (
					<PathCardItem
						key={index}
						pathDetails={path}
						navigation={navigation}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default HorizontalSectionPaths;
