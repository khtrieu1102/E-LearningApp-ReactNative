import React, { useState } from "react";
import { View, FlatList, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import SingleRating from "./single-rating";
import SectionCoursesHeader from "../section-courses/section-courses-header";
import { Ionicons } from "@expo/vector-icons";
import RatingInputFields from "./rating-input-fields";

const Ratings = ({ ratings, isInProcessCourses, courseId }) => {
	const appSettingsReducer = useSelector(state => state.appSettingsReducer);
	const { theme, languageName } = appSettingsReducer;
	const [ formData, setFormData ] = useState({
		comment: "",
		contentPoint: 0,
		formalityPoint: 0,
		presentationPoint: 0
	});
	
	const onSendRating = () => {
		console.log(formData);
	}
	
	return (
		<View style={{padding: 10}}>
			<SectionCoursesHeader header={languageName == 'vietnamese' ? "Các đánh giá và nhận xét" : "Reviews and Ratings"} showButtonSeeAll={false} />
			
			{ isInProcessCourses && <RatingInputFields courseId={courseId} isInProcessCourses={isInProcessCourses} /> }

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
					<Text style={{ color: theme.primaryTextColor }}>{ languageName == "vietnamese" ? "Hiện chưa có đánh giá nào ở khoá học này!" : "There's no review for this course yet!" }</Text>
				</View>
			}
		</View>
	);
};

export default Ratings;
