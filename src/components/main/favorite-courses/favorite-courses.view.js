import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, FlatList, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import VerticalSectionCourses from "../../cores/section-courses/vertical-section-courses"
import FavoriteCourseItemList from "../../cores/course/favorite-course-item-list";
import apiMethods from "../../../http-client/api-methods"

const FavoriteCourses = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const [ data, setData ] = useState(null);
	const [ shouldLoadData, setShouldLoadData ] = useState(true);
	const mountedRef = useRef(true);

	const _getFavoriteCourses = async () => {

		await apiMethods.application.httpGetFavoriteCourses()
			.then(result => result?.data?.payload)
			.then(result => {
				console.log(result);
				setData(result);
				setShouldLoadData(false);
			}).catch(error => {
				console.log(error.response);
			})
	}

	useEffect(() => {
		
		if (!mountedRef.current) return;
		if (shouldLoadData == false) return;
		_getFavoriteCourses();

		return () => {
			setShouldLoadData(false);
            mountedRef.current = false;
		}
	}, [shouldLoadData])

	return (
		<View>
			<Button title="Reload" onPress={() => _getFavoriteCourses()}></Button>
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
					<Text style={{ color: theme.primaryTextColor }}>Hiện chưa có khoá học nào ở mục này</Text>
				</View>
			}
		</View>
	);
};

export default FavoriteCourses;
