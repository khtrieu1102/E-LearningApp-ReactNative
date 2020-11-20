import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "./home/home.view";
import FavoriteCourse from "./favorite-courses/favorite-courses.view"
import VerticalSectionCourses from "../cores/section-courses/vertical-section-courses";
import CourseDetail from "../cores/course/detail/course-detail";
import PathDetail from "../cores/path/path-detail"
import VerticalSectionPaths from '../cores/section-paths/vertical-section-paths';

import Browse from "./browse/browse.view";
import Settings from "./settings/settings.view"
import Search from "./search/search.view"

import AuthorDetail from "../cores/author/author-detail"
import SkillDetail from "../cores/section-skills/skill-detail";
import FullSkillTopic from "../cores/section-skills/full-skill-topic";

const MainTab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home/Dashboard" component={Home} />
			<HomeStack.Screen
				name="VerticalSectionCourses"
				component={() => <VerticalSectionCourses />}
			/>
			<HomeStack.Screen 
				name="CourseDetail" 
				component={() => <CourseDetail />} 
			/>
			<HomeStack.Screen 
				name="AuthorDetail" 
				component={() => <AuthorDetail />} 
			/>
			<HomeStack.Screen 
				name="PathDetail" 
				component={() => <PathDetail />} 
			/>
			<HomeStack.Screen 
				name="VerticalSectionPaths" 
				component={() => <VerticalSectionPaths />} 
			/>
		</HomeStack.Navigator>
	);
};

const FavoriteStack = createStackNavigator();
const FavoriteStackScreens = () => {
	return (
		<FavoriteStack.Navigator>
			<FavoriteStack.Screen name="FavoriteCourse/Dashboard" component={FavoriteCourse} />
			<FavoriteStack.Screen 
				name="CourseDetail" 
				component={() => <CourseDetail />} 
			/>
			<HomeStack.Screen 
				name="AuthorDetail" 
				component={() => <AuthorDetail />} 
			/>
		</FavoriteStack.Navigator>
	);
};

const BrowseStack = createStackNavigator();
const BrowseStackScreens = () => {
	return (
		<BrowseStack.Navigator>
			<BrowseStack.Screen name="Browse/Dashboard" component={Browse} />
			<BrowseStack.Screen
				name="VerticalSectionCourses"
				component={() => <VerticalSectionCourses />}
			/>
			<BrowseStack.Screen 
				name="CourseDetail" 
				component={() => <CourseDetail />} 
			/>
			<BrowseStack.Screen 
				name="PathDetail" 
				component={() => <PathDetail />} 
			/>
			<BrowseStack.Screen 
				name="VerticalSectionPaths" 
				component={() => <VerticalSectionPaths />} 
			/>
			<BrowseStack.Screen 
				name="AuthorDetail" 
				component={() => <AuthorDetail />} 
			/>
			<BrowseStack.Screen 
				name="FullSkillTopic" 
				component={() => <FullSkillTopic />} 
			/>
			<BrowseStack.Screen 
				name="SkillDetail" 
				component={() => <SkillDetail />} 
			/>
		</BrowseStack.Navigator>
	);
};

const SearchStack = createStackNavigator();
const SearchStackScreens = () => {
	return (
		<SearchStack.Navigator>
			<SearchStack.Screen name="Search/Dashboard" component={Search} />
			<SearchStack.Screen
				name="VerticalSectionCourses"
				component={() => <VerticalSectionCourses />}
			/>
			<SearchStack.Screen 
				name="CourseDetail" 
				component={() => <CourseDetail />} 
			/>
			<SearchStack.Screen 
				name="AuthorDetail" 
				component={() => <AuthorDetail />} 
			/>
		</SearchStack.Navigator>
	);
};

const SettingsStack = createStackNavigator();
const SettingsStackScreens = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings/Dashboard" component={Settings} />
		</SettingsStack.Navigator>
	);
};



const MainTabNavigator = () => {
    return (
        <MainTab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
			  let iconName;
  
			  switch (route.name) {
				case 'Home': {
					iconName = focused
					  ? 'ios-home'
					  : 'ios-home';
					  break;
				} 
				case 'FavoriteCourse': {
					iconName = focused ? 'ios-download' : 'ios-download';
					break;
				}
				case 'Browse': {
					iconName = 'ios-grid';
					break;
				}
				case 'Search': {
					iconName = 'ios-search';
					break;
				}
				case 'Settings': {
					iconName = 'ios-settings';
					break;
				}
				default:
			  }
			  
  
			  // You can return any component that you like here!
			  return <Ionicons name={iconName} size={size} color={color} />;
			},
		  })}
		  tabBarOptions={{
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		  }}>
            <MainTab.Screen name="Home" component={HomeStackScreens} />
            <MainTab.Screen name="FavoriteCourse" component={FavoriteStackScreens} />
            <MainTab.Screen name="Browse" component={BrowseStackScreens} />
            <MainTab.Screen name="Search" component={SearchStackScreens} />
            <MainTab.Screen name="Settings" component={SettingsStackScreens} />
        </MainTab.Navigator>
    );
}
export default MainTabNavigator;

  