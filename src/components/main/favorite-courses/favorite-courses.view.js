import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, FlatList, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import VerticalSectionCourses from "../../cores/section-courses/vertical-section-courses"
import FavoriteCourseItemList from "../../cores/course/favorite-course-item-list";
import apiMethods from "../../../http-client/api-methods"

const FavoriteCourses = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme, languageName } = appSettingsReducer;
	const [ data, setData ] = useState(null);
	const [ shouldLoadData, setShouldLoadData ] = useState(true);
	const mountedRef = useRef(true);

	const _getFavoriteCourses = async () => {

		await apiMethods.application.httpGetFavoriteCourses()
			.then(result => result?.data?.payload)
			.then(result => {
				setData(result);
				setShouldLoadData(false);
			}).catch(error => {
				console.log(error.response);
			})
	}

	useEffect(() => {
		if (!mountedRef.current) return;
		_getFavoriteCourses();

		return () => {
            mountedRef.current = false;
		}
	}, [])

	return (
		<View>
			<Button title={languageName == "vietnamese" ? "Tải lại" : "Reload"} onPress={() => _getFavoriteCourses()}></Button>
			{data && 
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<FavoriteCourseItemList courseDetails={item} />
					)}
					keyExtractor={(item) => item.id + ""} // expect key as a string.
				/>
			}
			{!data && 
				<View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
					<Text style={{ color: theme.primaryTextColor }}>
						{languageName == "vietnamese" ? "Hiện chưa có khoá học nào ở mục này." : "There's no course in this section."}
					</Text>
				</View>
			}
		</View>
	);
};

export default FavoriteCourses;
