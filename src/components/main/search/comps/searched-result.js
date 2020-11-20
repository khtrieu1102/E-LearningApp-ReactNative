import React from "react";
import { TouchableOpacity, Text, SectionList, View } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';

// import "../../../cores/section-authors/horizontal-section-authors"
import VerticalSectionCourses from "../../../cores/section-courses/vertical-section-courses"

const SearchedResult = (props) => {
	const TabAllResult = () => (
		<Text>All result</Text>
	);

    const TabCourses = () => (
        <VerticalSectionCourses />
    );
        
    const TabAuthors = () => (
        <Text>Authors result</Text>
    );

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
	  { key: 'first', title: 'All' },
	  { key: 'second', title: 'Courses' },
	  { key: 'third', title: 'Authors' },
	]);
   
	const renderScene = SceneMap({
	  first: TabAllResult,
	  second: TabCourses,
	  third: TabAuthors,
	});

	return (
		<>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{height: 300, background: "white"}}
			/>
		</>
	);
};

export default SearchedResult;
