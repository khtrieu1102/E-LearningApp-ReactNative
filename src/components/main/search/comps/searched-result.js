import React, { useState } from "react";
import { TouchableOpacity, Text, SectionList, View } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector } from "react-redux"

import VerticalSectionAuthors from "../../../cores/section-authors/vertical-section-authors"
import VerticalSectionCourses from "../../../cores/section-courses/vertical-section-courses"
import HorizontalSectionAuthors from "../../../cores/section-authors/horizontal-section-authors"
import HorizontalSectionCourses from "../../../cores/section-courses/horizontal-section-courses"
import Course from "../../../../models/course.model";

const SearchedResult = ({ searchedResult, isLoading }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme, languageName } = appSettingsReducer;
	const courses = searchedResult?.courses?.data.map((item, index) => {
		return new Course({
			...item,
			"instructor.user.name": item.name
		});
	});
	const authors = searchedResult?.instructors?.data;
	console.log(searchedResult?.courses?.data, courses);

	const TabAllResult = () => (
        <View>
            <HorizontalSectionCourses header={languageName == "vietnamese" ? "Kết quả khoá học" : "Courses Results "} courses={courses} isLoading={isLoading} />
            <HorizontalSectionAuthors header={languageName == "vietnamese" ? "Kết quả giảng viên" : "Instructors Results" } authors={authors} isLoading={isLoading} />
        </View>
	);

    const TabCourses = () => (
        <VerticalSectionCourses courses={courses} isLoading={isLoading}/>
    );
        
    const TabAuthors = () => (
        <VerticalSectionAuthors authors={authors} />
    );

	const [index, setIndex] = useState(0);
	const [routes] = useState([
	  { key: 'first', title: languageName == "vietnamese" ? "Tất cả" : 'All' },
	  { key: 'second', title: languageName == "vietnamese" ? "Khoá học" : 'Courses' },
	  { key: 'third', title: languageName == "vietnamese" ? "Giảng viên" : 'Instructors' },
	]);
   
	const renderScene = SceneMap({
	  first: TabAllResult,
	  second: TabCourses,
	  third: TabAuthors,
	});

	return (
		<View style={{flex: 1}}>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
                initialLayout={{height: 300, flex:1}}
				renderTabBar={props => <TabBar 
					style={{ backgroundColor: theme.primaryBackgroundColor }}
                    renderLabel={({ route, focused, color }) => (
                        <Text style={{ color: theme.primaryTextColor, margin: 8 }}>
                          {route.title.toUpperCase()}
                        </Text>
                    )}                 
                    {...props} 
				/>}c
			/>
		</View>
	);
};

export default SearchedResult;
