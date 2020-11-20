import React from "react";
import { TouchableOpacity, Text, SectionList, View } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import VerticalSectionAuthors from "../../../cores/section-authors/vertical-section-authors"
import VerticalSectionCourses from "../../../cores/section-courses/vertical-section-courses"
import HorizontalSectionAuthors from "../../../cores/section-authors/horizontal-section-authors"
import HorizontalSectionCourses from "../../../cores/section-courses/horizontal-section-courses"

const SearchedResult = (props) => {
	const TabAllResult = () => (
        <View>
            <HorizontalSectionCourses header="Courses results" />
            <HorizontalSectionAuthors header="Authors results" />
        </View>
	);

    const TabCourses = () => (
        <VerticalSectionCourses />
    );
        
    const TabAuthors = () => (
        <VerticalSectionAuthors />
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
                renderTabBar={props => <TabBar 
                    style={{backgroundColor: "white"}} 
                    renderLabel={({ route, focused, color }) => (
                        <Text style={{ color:'black', margin: 8 }}>
                          {route.title.toUpperCase()}
                        </Text>
                    )}                 
                    {...props} 
                />}
			/>
		</>
	);
};

export default SearchedResult;
