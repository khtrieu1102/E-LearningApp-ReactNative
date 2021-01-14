import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";

import HorizontalSectionCourses from "../../cores/section-courses/horizontal-section-courses"
import HorizontalSectionPaths from "../../cores/section-paths/horizontal-section-paths";
import HorizontalSectionAuthors from "../../cores/section-authors/horizontal-section-authors"
import FeatureCard from "../../cores/feature/feature-card";
import HorizontalSectionSkills from "../../cores/section-skills/horizontal-section-skills";
import { useSelector, useDispatch } from "react-redux";
import apiMethods from "../../../http-client/api-methods";
import helper from "../../../helpers"

const Browse = (props) => {
	const applicationReducer = useSelector((state) => state.applicationReducer);
	const { topNewCourses, topRateCourses } = applicationReducer;
	const [ isLoading, setIsLoading ] = useState(false);
	const [ paths, setPaths ] = useState([]);

	const _getAllCategories = async () => {
		setIsLoading(true);
		await apiMethods.application.httpGetAllCategories()
			.then(result => result.data.payload)
			.then(result => {
				console.log(result);
				setPaths(result);
				setIsLoading(false);
			})
			.catch(error => {
				helper.FlashMessageFunc.showGlobalError(error?.response?.data?.message);
				setIsLoading(false);
			});
	}

	useEffect(() => {
		_getAllCategories();
		return () => {
		}
	}, []);

	return (
		<ScrollView
			style={{
				flex: 1,
			}}
		>
			<FeatureCard title="NEW" courses={topNewCourses} />
			<FeatureCard title="RECOMMEND FOR YOU" courses={topRateCourses} />
			<HorizontalSectionSkills header="Popular skills" />
			<HorizontalSectionPaths header="ABC" paths={paths} isLoading={isLoading} />
			<HorizontalSectionAuthors header="Author" />
		</ScrollView>
	);
};

export default Browse;
