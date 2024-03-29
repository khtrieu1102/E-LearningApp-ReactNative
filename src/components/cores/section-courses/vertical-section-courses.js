import React from "react";
import { View, ScrollView, FlatList, Text } from "react-native";
import { useRoute } from "@react-navigation/native"
import SectionCoursesHeader from "./section-courses-header";
import CourseItemList from "../course/course-item-list";
import { useSelector } from "react-redux";

const VerticalSectionCourses = (props) => {
	const appSettingsReducer = useSelector(state => state.appSettingsReducer);
	const { theme, languageName } = appSettingsReducer;
	const { header, courses } = props;
	const route = useRoute();
	const tempCourses = courses || route?.params?.courses;
	
	return (
		<View>
			{header && <SectionCoursesHeader header={header} showButtonSeeAll={false} />}
			{tempCourses && 
				<FlatList
					data={tempCourses}
					renderItem={({ item }) => (
						<CourseItemList courseDetails={item} />
					)}
					keyExtractor={(item) => item.id + ""} // expect key as a string.
				/>
			}
			{!tempCourses && 
				<View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
					<Text style={{ color: theme.primaryTextColor }}>
						{languageName == "vietnamese" ? "Hiện chưa có khoá học nào ở mục này." : "There's no course in this section."}
					</Text>
				</View>
			}
		</View>
	);
};

export default VerticalSectionCourses;
