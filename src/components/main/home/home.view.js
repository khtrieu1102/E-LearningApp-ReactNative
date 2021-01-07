import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView, Button } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths"
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../../../redux/action-creators";
import apiMethods from "../../../http-client/api-methods";

const Home = (props) => {
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const { topNewCourses } = applicationReducer;
    const [shouldLoadData, setShouldLoadData] = useState(true);
	const dispatch = useDispatch();

	console.log("LOAD DATA: ", shouldLoadData);
	const _getNewCourses = async () => {
		await setShouldLoadData(false);
		// apiMethods.application.httpGetNewCourses().then(
		// 	result => console.log(result.data.payload)
		// ).catch(err => console.log(error));
		
		await dispatch(actionCreators.application.httpGetNewCourses());
	}	

	useEffect(() => {		
        if (shouldLoadData) {
			_getNewCourses();
		}
        setShouldLoadData(false);
	}, []);

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'transparent',
			}}
		>
			<Button onPress={_getNewCourses} title="RELOAD" />
			<HorizontalSectionCourses header="Continue Learning" />
			<HorizontalSectionCourses header="Top new" courses={topNewCourses}/>
			<HorizontalSectionPaths header="Paths" />
			<HorizontalSectionCourses header="Bookmarks" />
		</ScrollView>
	);
};

export default Home;
