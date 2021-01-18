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
	const { isLoading, topNewCourses, topRateCourses, topSellCourses } = applicationReducer;
    const [shouldLoadData, setShouldLoadData] = useState(true);
    const [processCourses, setProcessCourses] = useState([]);
	const dispatch = useDispatch();    
	const mountedRef = useRef(true);

	useEffect(() => {
		if (!mountedRef.current) return;
		
		const _getSomeCourses = async () => {
			
			await setShouldLoadData(false);
			await dispatch(actionCreators.application.httpGetNewCourses());
			await dispatch(actionCreators.application.httpGetTopRateCourses());
			await dispatch(actionCreators.application.httpGetTopSellCourses());
			await apiMethods.application.httpGetProcessCourses()
				.then(result => result?.data?.payload)
				.then(result => {
					const data = result.map((item, index) => {
						return new Course({
							...item,
							title: item.courseTitle,
							imageUrl: item.courseImage,
							"instructor.user.name": item.instructorName,
							process: item.process,
							learnLesson: item.learnLesson,
							total: item.total,			
						});
					});
					console.log(data);
					setProcessCourses(data);
				})
				.catch(error => helpers.FlashMessageFunc.showSimpleError("Cannot get process course"));
		}	
		
		_getSomeCourses();
        return () => {
            mountedRef.current = false;
        };
    }, [shouldLoadData]);

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'transparent',
			}}
		>
			<HorizontalSectionCourses header="My in-process courses" courses={processCourses} isLoading={isLoading} />
			<HorizontalSectionCourses header="Top new" courses={topNewCourses} isLoading={isLoading}/>
			<HorizontalSectionCourses header="Top rate" courses={topSellCourses} isLoading={isLoading}/>
			<HorizontalSectionCourses header="Recommend for you" courses={topRateCourses} isLoading={isLoading}/>
		</ScrollView>
	);
};

export default Home;
