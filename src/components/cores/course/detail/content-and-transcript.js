import React from "react";
import { TouchableOpacity, Text, SectionList, View } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector } from "react-redux"

const Detail = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme, languageName } = appSettingsReducer;
	const textColor = theme.primaryTextColor;
	const backgroundColor = theme.primaryBackgroundColor;
	const SectionsData = props.section.map((item, index) => {
		return { section: item, data: item.lesson }
	});		

	const ExercisesData = [
		{ title: "Course Overview", data: ["Course overview"] },
		{ title: "Main Contents", data: ["Section 1", "Section 2", "Section 3"] },
		{ title: "Conclusion", data: ["Ending 1", "Ending 2"] },
		{ title: "Course Overview", data: ["Course overview"] },
		{ title: "Main Contents", data: ["Section 1", "Section 2", "Section 3"] },
		{ title: "Conclusion", data: ["Ending 1", "Ending 2"] },
		{ title: "Course Overview", data: ["Course overview"] },
		{ title: "Main Contents", data: ["Section 1", "Section 2", "Section 3"] },
		{ title: "Conclusion", data: ["Ending 1", "Ending 2"] },
	];

	const Item = ({ lesson }) => (
		<View style={{ paddingBottom: 5, paddingTop: 5, backgroundColor: backgroundColor }}>
			<Text style={{ color: textColor }}>{lesson.name}</Text>
		</View>
	);

	const Header = ({ section }) => (
		<View style={{ paddingTop: 5, backgroundColor: backgroundColor, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
			<Text style={{ fontSize: 20, color: textColor }}>{section.name}</Text>
			<Text style={{ color: textColor }}>{Math.round((section.sumHours + Number.EPSILON) * 100) / 100} hours</Text>
		</View>
	);

	const ExercisesComponent = () => (
		<SectionList
			sections={SectionsData}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => <Item lesson={item} />}
			renderSectionHeader={({ section: { section } }) => (
				<Header section={section} />
			)}
			stickySectionHeadersEnabled={true}
		/>
	);

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
	  { key: 'first', title: languageName ? 'Bài học' : 'Sections' },
	  { key: 'second', title: languageName ? 'Bài tập' : 'Exercises' },
	]);
   
	const renderScene = SceneMap({
	  first: ExercisesComponent,
	  second: ExercisesComponent,
	});

	return (
		<>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{height: 300, background: backgroundColor}}
				renderTabBar={props => <TabBar 
                    style={{backgroundColor: backgroundColor}} 
                    renderLabel={({ route, focused, color }) => (
                        <Text style={{ color: textColor, margin: 8 }}>
                          {route.title.toUpperCase()}
                        </Text>
                    )}                 
                    {...props} 
                />}
			/>
		</>
	);
};

export default Detail;
