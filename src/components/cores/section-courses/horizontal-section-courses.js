import React from "react";
import { View, ScrollView, ActivityIndicator, Text } from "react-native";

import SectionCoursesHeader from "./section-courses-header";
import CourseItemCard from "../course/course-item-card";
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux";

const HorizontalSectionCourses = ({ header, courses, isLoading }) => {    
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const navigation = useNavigation();

	const onSeeAll = () => {
		navigation.navigate("VerticalSectionCourses", { header, courses });
	};

	return (
		<View>
			<SectionCoursesHeader
				header={header}
				showButtonSeeAll={courses?.length > 0 ? true : false}
				onSeeAll={onSeeAll}
			/>

			{isLoading && <ActivityIndicator color={theme.primaryTextColor} /> }

			{!isLoading && 
				<View>
					{
						courses?.length > 0 ? 
						<ScrollView horizontal={true} >
							{courses.map((item, index) => (
								<CourseItemCard
									key={index}
									courseDetails={item}
								/>
							))}
						</ScrollView> : 
						<View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
							<Text style={{ color: theme.primaryTextColor }}>Hiện chưa có khoá học nào ở mục này</Text>
						</View>
					}
				</View>
			}
			
		</View>
	);
};

export default HorizontalSectionCourses;
