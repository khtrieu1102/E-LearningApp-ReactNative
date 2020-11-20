import React from "react";
import { TouchableOpacity, Text, SectionList, View } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Detail = (props) => {
	const ContentsData = [
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

	const TranscriptData = [
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

	const handlePress = () => {
		console.log("Go to author name");
		// navigation.navigate("AuthorDetail", { authorDetails: authorDetails });
	};

	const Item = ({ title }) => (
		<View style={{ paddingBottom: 5, paddingTop: 5 }}>
			<Text>{title}</Text>
		</View>
	);

	const Header = ({ title }) => (
		<View style={{ paddingTop: 5 }}>
			<Text style={{ fontSize: 20 }}>{title}</Text>
		</View>
	);

	const ContentsComponent = () => (
		<SectionList
			sections={ContentsData}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => <Item title={item} />}
			renderSectionHeader={({ section: { title } }) => <Header title={title} />}
			stickySectionHeadersEnabled={true}
		/>
	);

	const TranscriptComponent = () => (
		<SectionList
			sections={TranscriptData}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => <Item title={item} />}
			renderSectionHeader={({ section: { title } }) => (
				<Header title={"Transcript" + title} />
			)}
			stickySectionHeadersEnabled={true}
		/>
	);

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
	  { key: 'first', title: 'Contents' },
	  { key: 'second', title: 'Transcripts' },
	]);
   
	const renderScene = SceneMap({
	  first: ContentsComponent,
	  second: TranscriptComponent,
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

export default Detail;
