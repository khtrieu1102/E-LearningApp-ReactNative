import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./home/home.view";
import FavoriteCourse from "./favorite-courses/favorite-courses.view"
import VerticalSectionCourses from "../cores/section-courses/vertical-section-courses";
import CourseDetail from "../cores/course/detail/course-detail";

const MainTab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home/Dashboard" component={Home} />
			<HomeStack.Screen
				name="Home/VerticalSectionCourse"
				component={() => <VerticalSectionCourses />}
			/>
			<HomeStack.Screen 
				name="Home/CourseDetail" 
				component={() => <CourseDetail />} 
			/>
		</HomeStack.Navigator>
	);
};

const FavoriteStack = createStackNavigator();
const FavoriteStackScreens = () => {
	return (
		<FavoriteStack.Navigator>
			<FavoriteStack.Screen name="FavoriteCourse/Dashboard" component={FavoriteCourse} />
		</FavoriteStack.Navigator>
	);
};

const MainTabNavigator = () => {
    return (
        <MainTab.Navigator>
            <MainTab.Screen name="Home" component={HomeStackScreens} />
            <MainTab.Screen name="FavoriteCourse" component={FavoriteStackScreens} />
        </MainTab.Navigator>
    );
}
export default MainTabNavigator;

  