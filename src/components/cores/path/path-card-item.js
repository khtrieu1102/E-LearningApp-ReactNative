import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux"

const PathCardItem = (props) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const { pathDetails } = props;
	const { id, pathName, amount, description, duration } = pathDetails;
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("PathDetail", { pathDetails: pathDetails });
	};

	return (
		<TouchableOpacity
			style={{
				marginRight: 20,
				height: 200,
				width: 220,
				backgroundColor: theme.courseItemColor,
				shadowColor: "#000",
				shadowOffset: {
					width: 5,
					height: 10,
				},
				shadowOpacity: 0.23,
				shadowRadius: 2.62,
			}}
			onPress={handlePress}
		>
			<Image
				source={{
					uri:
						"https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
				}}
				style={{ height: 100 }}
			/>
			<View style={{ marginTop: 10, marginLeft: 10 }}>
				<Text style={{ fontWeight: "bold" }}>{pathName}</Text>
				<Text>{amount} courses</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PathCardItem;
