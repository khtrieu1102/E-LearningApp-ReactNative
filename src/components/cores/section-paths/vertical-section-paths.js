import React from "react";
import { View, FlatList, ScrollView } from "react-native";


import SectionPathsHeader from "./section-paths-header";
import PathListItem from "../path/path-list-item";
import { useNavigation, useRoute } from "@react-navigation/native";

const VerticalSectionPaths = ({ header }) => {
	const navigation = useNavigation();
	const route = useRoute();
	const tempPaths =
		route && route.params.paths
			? route.params.paths
			: [
					{
						id: 1,
						pathName: "React",
						amount: 12,
					},
					{
						id: 2,
						pathName: "Leadership and Management for: Project Managers",
						amount: 44,
					},
					{
						id: 3,
						pathName: "Android and Android simulator",
						amount: 10,
					},
					{
						id: 3,
						pathName: "Advanced Website application development",
						amount: 15,
					},
			  ];

	return (
		<ScrollView>
			<SectionPathsHeader header={header} showButtonSeeAll={false}/>
			<FlatList
				data={tempPaths}
				renderItem={({ item }) => (
					<PathListItem pathDetails={item} />
				)}
				keyExtractor={(item) => item.id + ""} // expect key as a string.
			/>
		</ScrollView>
	);
};

export default VerticalSectionPaths;
