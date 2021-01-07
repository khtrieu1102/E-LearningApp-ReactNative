import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView, Button, ActivityIndicator } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths"
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../../../redux/action-creators";
import apiMethods from "../../../http-client/api-methods";

const Home = (props) => {
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const { isLoading, topNewCourses, topRateCourses, topSellCourses } = applicationReducer;
    const [shouldLoadData, setShouldLoadData] = useState(true);
	const dispatch = useDispatch();

	console.log("LOAD DATA: ", shouldLoadData);
	const _getSomeCourses = async () => {
		await dispatch(actionCreators.application.httpGetNewCourses());
		await dispatch(actionCreators.application.httpGetTopRateCourses());
		await dispatch(actionCreators.application.httpGetTopSellCourses());
	}	

	useEffect(() => {		
        if (shouldLoadData) {
			_getSomeCourses();
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
			<Button onPress={_getSomeCourses} title="RELOAD" />
			<HorizontalSectionCourses header="My courses" />
			<HorizontalSectionCourses header="Top new" courses={topNewCourses} isLoading={isLoading}/>
			<HorizontalSectionCourses header="Top rate" courses={topSellCourses} isLoading={isLoading}/>
			<HorizontalSectionCourses header="Recommend for you" courses={topRateCourses} isLoading={isLoading}/>
			<HorizontalSectionPaths header="Paths" />
		</ScrollView>
	);
};

export default Home;
