import React from "react";
import { View, FlatList, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthorItemList from "../author/author-item-list";
import SectionCoursesHeader from "../section-courses/section-courses-header";

const VerticalSectionAuthors = ({ header, authors }) => {
	const appSettingsReducer = useSelector(state => state.appSettingsReducer);
	const { theme, languageName } = appSettingsReducer;
	const route = useRoute();
	const tempAuthors = authors || route?.params?.authors;

	return (
		<View style={{padding: 10}}>
			{header && <SectionCoursesHeader header={header} showButtonSeeAll={false} />}
			{tempAuthors?.length > 0 && 
				<FlatList
					data={tempAuthors}
					renderItem={({ item }) => (
						<AuthorItemList authorDetails={item} />
					)}
					keyExtractor={(item) => item.id + ""} // expect key as a string.
				/>
			}
			{!tempAuthors?.length && 
				<View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
					<Text style={{ color: theme.primaryTextColor }}>
						{languageName == "vietnamese" ? "Hiện chưa có giảng viên nào ở mục này." : "There's no instructor in this section."}
					</Text>
				</View>
			}
		</View>
	);
};

export default VerticalSectionAuthors;
