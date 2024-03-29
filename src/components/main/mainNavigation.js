import React from "react";
import { View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "./home/home.view";
import FavoriteCourse from "./favorite-courses/favorite-courses.view"
import VerticalSectionCourses from "../cores/section-courses/vertical-section-courses";
import CourseDetail from "../cores/course/detail/course-detail";
import PathDetail from "../cores/path/path-detail"
import VerticalSectionPaths from '../cores/section-paths/vertical-section-paths';
import HomeSplashScreen from "./home/splash-screen/splash-screen.view";

import Browse from "./browse/browse.view";
import VerticalSectionAuthors from "../cores/section-authors/vertical-section-authors";
import Settings from "./settings/settings.view"
import Search from "./search/search.view"

import AuthorDetail from "../cores/author/author-detail"
import SkillDetail from "../cores/section-skills/skill-detail";
import FullSkillTopic from "../cores/section-skills/full-skill-topic";

import UserProfile from "./settings/profile.view";
import LanguageSettings from "./settings/language-settings.view";
import ThemeSettings from "./settings/theme-settings.view";
import PasswordUpdateForm from "./settings/password-update-form.view";
import EmailUpdateForm from "./settings/email-update-form.view";
import { useSelector, useDispatch } from "react-redux";
import LessonDetail from "../cores/lesson/lesson-detail";

const MainTabNavigator = () => {
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const authorizationReducer = useSelector((state) => state.authorizationReducer);
	const { userInfo } = authorizationReducer;
	const { theme } = appSettingsReducer;
	const MainTab = createBottomTabNavigator();

	const HomeStack = createStackNavigator();
	const FavoriteStack = createStackNavigator();
	const BrowseStack = createStackNavigator();
	const SearchStack = createStackNavigator();
	const SettingsStack = createStackNavigator();

	const headerStyleOptions = {
		headerStyle: {
			backgroundColor: "transparent",
		},
		headerTintColor: theme.primaryTextColor,
		headerTitleStyle: {
			fontWeight: 'bold',
		},
		headerRight: () => <Image
			source={{ uri: userInfo.avatar }}
			style={{ borderRadius: 50, borderColor: "black", borderWidth: 1, height: 30, width:30, alignSelf: "center" }}
		/>,
		cardStyle: {
			paddingLeft: "3%",
			paddingBottom: "3%",
			paddingRight: "3%",
			backgroundColor: theme.primaryBackgroundColor,
		},
	}

	const HomeStackScreens = () => {
		return (
			
			<HomeStack.Navigator screenOptions={headerStyleOptions}>
				
				<HomeStack.Screen name="Home/SplashScreen" component={HomeSplashScreen} options={{ headerShown: false }} />
				<HomeStack.Screen name="Home/Dashboard" component={Home} options={{ headerLeft:null }} />
				<HomeStack.Screen
					name="VerticalSectionCourses"
					component={VerticalSectionCourses}
					options={({ route }) => ({ title: route.params.header })}
				/>
				<HomeStack.Screen 
					name="CourseDetail" 
					component={CourseDetail} 
				/>
				<HomeStack.Screen 
					name="AuthorDetail" 
					component={AuthorDetail} 
				/>
				<HomeStack.Screen 
					name="PathDetail" 
					component={PathDetail} 
				/>
				<HomeStack.Screen 
					name="VerticalSectionPaths" 
					component={VerticalSectionPaths} 
				/>
				<HomeStack.Screen 
					name="LessonDetail" 
					component={LessonDetail} 
				/>
			</HomeStack.Navigator>
		);
	};

	const FavoriteStackScreens = () => {
		return (
			<FavoriteStack.Navigator screenOptions={headerStyleOptions}>
				<FavoriteStack.Screen name="FavoriteCourse/Dashboard" component={FavoriteCourse} />
				<FavoriteStack.Screen 
					name="CourseDetail" 
					component={CourseDetail} 
				/>
				<SearchStack.Screen
					name="VerticalSectionCourses"
					component={VerticalSectionCourses}
				/>
				<SearchStack.Screen 
					name="AuthorDetail" 
					component={AuthorDetail} 
				/>
				<SearchStack.Screen 
					name="LessonDetail" 
					component={LessonDetail} 
				/>
			</FavoriteStack.Navigator>
		);
	};

	const BrowseStackScreens = () => {
		return (
			<BrowseStack.Navigator screenOptions={headerStyleOptions}>
				<BrowseStack.Screen name="Browse/Dashboard" component={Browse} />
				<BrowseStack.Screen
					name="VerticalSectionCourses"
					component={VerticalSectionCourses}
				/>
				<BrowseStack.Screen 
					name="CourseDetail" 
					component={CourseDetail} 
				/>
				<BrowseStack.Screen 
					name="VerticalSectionAuthors"
					component={VerticalSectionAuthors}
				/>
				<BrowseStack.Screen 
					name="PathDetail" 
					component={PathDetail} 
				/>
				<BrowseStack.Screen 
					name="VerticalSectionPaths" 
					component={VerticalSectionPaths} 
				/>
				<BrowseStack.Screen 
					name="AuthorDetail" 
					component={AuthorDetail} 
				/>
				<BrowseStack.Screen 
					name="FullSkillTopic" 
					component={FullSkillTopic} 
				/>
				<BrowseStack.Screen 
					name="SkillDetail" 
					component={SkillDetail} 
				/>
				<BrowseStack.Screen 
					name="LessonDetail" 
					component={LessonDetail} 
				/>
			</BrowseStack.Navigator>
		);
	};

	const SearchStackScreens = () => {
		return (
			<SearchStack.Navigator screenOptions={headerStyleOptions}>
				<SearchStack.Screen name="Search/Dashboard" component={Search} />
				<SearchStack.Screen
					name="VerticalSectionCourses"
					component={VerticalSectionCourses}
				/>
				<SearchStack.Screen 
					name="VerticalSectionAuthors"
					component={VerticalSectionAuthors}
				/>
				<SearchStack.Screen 
					name="CourseDetail" 
					component={CourseDetail} 
				/>
				<SearchStack.Screen 
					name="AuthorDetail" 
					component={AuthorDetail} 
				/>
				<SearchStack.Screen 
					name="LessonDetail" 
					component={LessonDetail} 
				/>
			</SearchStack.Navigator>
		);
	};

	const SettingsStackScreens = () => {
		return (
			<SettingsStack.Navigator screenOptions={headerStyleOptions}>
				<SettingsStack.Screen name="Settings/Dashboard" component={Settings} />
				<SettingsStack.Screen name="Settings/UserProfile" component={UserProfile} />
				<SettingsStack.Screen name="Settings/ThemeSettings" component={ThemeSettings} />
				<SettingsStack.Screen name="Settings/LanguageSettings" component={LanguageSettings} />
				<SettingsStack.Screen name="Settings/EmailUpdateForm" component={EmailUpdateForm} />
				<SettingsStack.Screen name="Settings/PasswordUpdateForm" component={PasswordUpdateForm} />
			</SettingsStack.Navigator>
		);
	};

    return (
		<MainTab.Navigator 
			screenOptions={({ route }) => ({
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
				}
			})}
			style
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
			initialRouteName="Home"
		>
			<MainTab.Screen name="Home" component={HomeStackScreens} />
			<MainTab.Screen name="FavoriteCourse" component={FavoriteStackScreens} />
			<MainTab.Screen name="Browse" component={BrowseStackScreens} />
			<MainTab.Screen name="Search" component={SearchStackScreens} />
			<MainTab.Screen name="Settings" component={SettingsStackScreens} />
        </MainTab.Navigator>
    );
}
export default MainTabNavigator;

  