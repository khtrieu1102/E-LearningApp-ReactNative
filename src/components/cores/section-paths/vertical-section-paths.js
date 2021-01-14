import React from "react";
import { View, FlatList, Text } from "react-native";
import SectionPathsHeader from "./section-paths-header";
import PathListItem from "../path/path-list-item";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const VerticalSectionPaths = ({ header, paths }) => {
	const appSettingsReducer = useSelector(state => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const route = useRoute();
	const tempPaths = paths || route?.params?.paths;

	return (
		<View>
			{header && <SectionPathsHeader header={header} showButtonSeeAll={false} />}
			{tempPaths && 
				<FlatList
					data={tempPaths}
					renderItem={({ item }) => (
						<PathListItem pathDetails={item} />
					)}
					keyExtractor={(item) => item.id + ""} // expect key as a string.
				/>
			}
			{!tempPaths && 
				<View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
					<Text style={{ color: theme.primaryTextColor }}>Hiện chưa có khoá học nào ở mục này</Text>
				</View>
			}
		</View>
	);
};

export default VerticalSectionPaths;
