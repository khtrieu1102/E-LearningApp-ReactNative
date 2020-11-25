import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux"

const PathListItem = ({ pathDetails }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;

	const { id, pathName, amount } = pathDetails;
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("PathDetail", { pathDetails });
	};

	return (
		<View>
			<View
				style={{
					backgroundColor: "transparent",
					flexDirection: "row",
					paddingTop: 10,
					marginBottom: 10
				}}
			>
				<TouchableOpacity
					style={{
						width: "90%",
						flexDirection: "row",
						justifyContent: "flex-start",
						marginBottom: 10,
					}}
					onPress={handlePress}
				>
					<Image
						source={{
							uri:
								"https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
						}}
						style={{ width: 80, height: 60, maxWidth: "30%" }}
					/>
					<View style={{ paddingLeft: 10, maxWidth: "70%", paddingRight: 10 }}>
						<Text
							style={{
								fontWeight: "bold",
								marginBottom: 5,
								color: textColor,
							}}
						>
							{pathName}
						</Text>
						<Text style={{ color: "#979ba1", fontSize: 11, paddingTop: 3 }}>
							{amount} courses
						</Text>
						{/* <Text style={{ color: "#979ba1", fontSize: 11, paddingTop: 3 }}>
							{level} - {released} - {duration}
						</Text> */}
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<Ionicons
						style={{ maxWidth: "10%" }}
						name="ios-more"
						size={20}
						color={textColor}
					/>
				</TouchableOpacity>
			</View>

			<View
				style={{
					backgroundColor: "#cccccc",
					height: 1,
					alignSelf: "stretch",
				}}
			/>
		</View>
	);
};

export default PathListItem;
