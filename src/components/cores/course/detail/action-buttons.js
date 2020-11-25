import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Description from "../../description/description";

const Actions = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;
	const backgroundColor = theme.primaryBackgroundColor;

	const navigation = useNavigation();
	const { description, onAddToFavorite, onRemoveFromFavorite } = props;
	const handlePress = () => {
		console.log("Go to author name");
		// navigation.navigate("AuthorDetail", { authorDetails: authorDetails });
	};

	const CircleButton = ({ buttonName, iconName, handlePress }) => (
		<TouchableOpacity
			style={{
				alignItems: "center",
			}}
			onPress={handlePress}
		>
			<TouchableOpacity
				style={{
					borderRadius: 50,
					width: 50, 
					height: 50,
					backgroundColor: "#dedede",
					alignItems: "center"
				}}
				onPress={handlePress}
			>
				<Ionicons
					style={{ alignSelf: "center", 
					flex: 1,}}
					name={iconName}
					size={32}
					color="#8a92a1"
				/>
			</TouchableOpacity>
			<View>
				<Text style={{ alignSelf: "center", color: textColor }}>{buttonName}</Text>
			</View>
		</TouchableOpacity>
	);

	const FullButton = ({ buttonName, handlePress }) => (
		<TouchableOpacity
			style={{
				backgroundColor: "#dedede",
				flexDirection: "column",
				borderRadius: 10,
				marginBottom: 10,
			}}
			onPress={handlePress}
		>
			<Text
				style={{
					flex: 1, 
					color: backgroundColor,
					alignSelf: "center",
					fontSize: 12,
					padding: 15,
				}}
			>
				{buttonName}
			</Text>
		</TouchableOpacity>
	);

	return (
		<>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingTop: 10,
				}}
			>
				<CircleButton handlePress={handlePress} iconName="ios-add" buttonName="Bookmark" />
				<CircleButton handlePress={handlePress} iconName="ios-add" buttonName="Channel" />
				<CircleButton handlePress={onAddToFavorite} iconName="ios-heart" buttonName="Downloads" />
				{/* <CircleButton
					handlePress={onAddToFavorite}
					buttonName="Remove downloads"
				/> */}
			</View>
			<Description description={description} />
			<View
				style={{
					flexDirection: "column",
					paddingTop: 10,
				}}
			>
				<FullButton
					buttonName="Related paths & courses"
					handlePress={handlePress}
				/>
				<FullButton
					buttonName="Take a learning check"
					handlePress={handlePress}
				/>
			</View>
		</>
	);
};

export default Actions;
