import React from "react";
import { View, ScrollView, ActivityIndicator, Text } from "react-native";
import SectionAuthorsHeader from "./section-authors-header";
import AuthorItemCard from "../author/author-item-card";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import SectionCoursesHeader from "../section-courses/section-courses-header"

const HorizontalSectionAuthors = ({ header, authors, isLoading}) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const navigation = useNavigation();

	const onSeeAll = () => {
		navigation.navigate("VerticalSectionAuthors", { authors: authors })
	}

	return (
		<View style={{ paddingTop: 20 }}>
			{header && <SectionCoursesHeader header={header} showButtonSeeAll={true} onSeeAll={onSeeAll}/>}
			{isLoading && <ActivityIndicator color={theme.primaryTextColor} /> }
			{!isLoading && 
				<View>
					{
						authors?.length > 0 ? 
						<ScrollView horizontal={true} >
							{authors.map((item, index) => (
								<AuthorItemCard
									key={index}
									authorDetails={item}
								/>
							))}
						</ScrollView> : 
						<View style={{ height: 100, justifyContent: "center", alignSelf: "center" }}>
							<Text style={{ color: theme.primaryTextColor }}>Hiện chưa có giảng viên nào ở đây</Text>
						</View>
					}
				</View>
			}
		</View>
	);
};

export default HorizontalSectionAuthors;
