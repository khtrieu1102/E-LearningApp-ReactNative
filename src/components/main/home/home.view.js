import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView, Button, ActivityIndicator } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths"
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../../../redux/action-creators";
import apiMethods from "../../../http-client/api-methods";
import helpers from "../../../helpers";
import Course from "../../../models/course.model";

const Home = (props) => {
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { languageName } = appSettingsReducer;
	const { isLoading, processCourses, topNewCourses, topRateCourses, topSellCourses } = applicationReducer;
    const [shouldLoadData, setShouldLoadData] = useState(true);
	const dispatch = useDispatch();    
	const mountedRef = useRef(true);

	const _getInitialCourses = async () => {
		
		await dispatch(actionCreators.application.httpGetNewCourses());
		await dispatch(actionCreators.application.httpGetTopRateCourses());
		await dispatch(actionCreators.application.httpGetTopSellCourses());
		await dispatch(actionCreators.application.httpGetProcessCourses());
	}	
	
	useEffect(() => {
		if (!mountedRef.current) return;
		
		_getInitialCourses();
        return () => {
            mountedRef.current = false;
        };
    }, []);

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'transparent',
			}}
		>
			<Button onPress={() => _getInitialCourses()} title={languageName == "vietnamese" ? "Tải lại" : "RELOAD" } />
			<HorizontalSectionCourses header={languageName == "vietnamese" ? "Các khoá đang học" : "My in-process courses" } courses={processCourses} isLoading={isLoading} />
			<HorizontalSectionCourses header={languageName == "vietnamese" ? "Các khóa mới nhất" : "Top new" } courses={topNewCourses} isLoading={isLoading}/>
			<HorizontalSectionCourses header={languageName == "vietnamese" ? "Được đánh giá cao" : "Top rate" } courses={topSellCourses} isLoading={isLoading}/>
			<HorizontalSectionCourses header={languageName == "vietnamese" ? "Gợi ý cho bạn" : "Recommend for you" } courses={topRateCourses} isLoading={isLoading}/>
		</ScrollView>
	);
};

export default Home;
