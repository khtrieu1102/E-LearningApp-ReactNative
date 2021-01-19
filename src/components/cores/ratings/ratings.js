import React from "react";
import { View, FlatList, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import SingleRating from "./single-rating";
import SectionCoursesHeader from "../section-courses/section-courses-header";

const Ratings = ({ ratings }) => {
	const appSettingsReducer = useSelector(state => state.appSettingsReducer);
	const { theme } = appSettingsReducer;

	return (
		<View style={{padding: 10}}>
			<SectionCoursesHeader header="Reviews and Ratings" showButtonSeeAll={false} />
			{ratings?.ratingList?.length > 0 && 
				<FlatList
					data={ratings?.ratingList}
					renderItem={({ item }) => (
						<SingleRating ratingDetails={item} />
					)}
					keyExtractor={(item) => item.id + ""} // expect key as a string.
				/>
			}
			{!ratings?.ratingList?.length && 
				<View style={{ height: 220, justifyContent: "center", alignSelf: "center" }}>
					<Text style={{ color: theme.primaryTextColor }}>Hiện chưa có đánh giá nào ở mục này</Text>
				</View>
			}
		</View>
	);
};

export default Ratings;
