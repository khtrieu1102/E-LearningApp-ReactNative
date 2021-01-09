import React from "react";
import { View, ScrollView, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import VerticalSectionCourses from "../../cores/section-courses/vertical-section-courses"
import FavoriteCourseItemList from "../../cores/course/favorite-course-item-list";

const FavoriteCourses = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const { theme } = appSettingsReducer;
	const { favoriteCourses } = applicationReducer;
	let DataLength = 0;

	if (favoriteCourses) {
		DataLength = favoriteCourses.length;
	}

	return (
		<ScrollView>
			{DataLength > 0 && 
				<FlatList
					data={favoriteCourses}
					renderItem={({ item }) => (
						<FavoriteCourseItemList courseDetails={item} />
					)}
					keyExtractor={(item) => item.id + ""} // expect key as a string.
				/>
			}
			{DataLength == 0 && 
				<View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
					<Text style={{ color: theme.primaryTextColor }}>Hiện chưa có khoá học nào ở mục này</Text>
				</View>
			}
		</ScrollView>
	);
};

export default FavoriteCourses;
