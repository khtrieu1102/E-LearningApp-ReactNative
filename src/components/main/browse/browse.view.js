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
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { languageName } = appSettingsReducer;
	const { topNewCourses, topRateCourses } = applicationReducer;
	const [ isLoading, setIsLoading ] = useState(false);
	const [ paths, setPaths ] = useState([]);
	const [ instructors, setInstructors ] = useState([]);

	const _getAllCategories = async () => {
		setIsLoading(true);
		await apiMethods.application.httpGetAllCategories()
			.then(result => result.data.payload)
			.then(result => {
				setPaths(result);
				setIsLoading(false);
			})
			.catch(error => {
				helper.FlashMessageFunc.showGlobalError(error?.response?.data?.message);
				setIsLoading(false);
			});
	}

	const _getAllInstructors = async () => {
		setIsLoading(true);
		await apiMethods.application.httpGetAllInstructors()
			.then(result => result.data.payload)
			.then(result => {
				setInstructors(result);
				setIsLoading(false);
			})
			.catch(error => {
				helper.FlashMessageFunc.showGlobalError(error?.response?.data?.message);
				setIsLoading(false);
			});
	}


	useEffect(() => {
		_getAllCategories();
		_getAllInstructors();
		return () => {
		}
	}, []);

	return (
		<ScrollView
			style={{
				flex: 1,
			}}
		>
			<FeatureCard title={ languageName == "vietnamese" ? "MỚI NHẤT" : "NEW" } courses={topNewCourses} />
			<FeatureCard title={ languageName == "vietnamese" ? "GỢI Ý CHO BẠN" : "RECOMMEND FOR YOU" } courses={topRateCourses} />
			<HorizontalSectionPaths header={languageName == "vietnamese" ? "Danh mục" : "Categories"} paths={paths} isLoading={isLoading} />
			<HorizontalSectionAuthors header={languageName == "vietnamese" ? "Giảng viên" : "Instructors"} authors={instructors} isLoading={isLoading} />
		</ScrollView>
	);
};

export default Browse;
