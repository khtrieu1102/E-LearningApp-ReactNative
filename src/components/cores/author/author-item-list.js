import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const AuthorItemList = ({ authorDetails }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const { id, authorName, amount } = authorDetails;
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("AuthorDetail", { authorDetails });
	};

	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					paddingTop: 10,
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
						style={{ width: 80, height: 80, maxWidth: "30%", borderRadius: 50 }}
					/>
					<View style={{ paddingLeft: 10, maxWidth: "70%", paddingRight: 10 }}>
						<Text
							style={{
								fontWeight: "bold",
								marginBottom: 5,
								color: theme.primaryTextColor
							}}
						>
							{authorName}
						</Text>
						<Text style={{ color: "#979ba1", fontSize: 11, paddingTop: 3 }}>
							{amount} courses
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<Ionicons
						style={{ maxWidth: "10%" }}
						name="ios-more"
						size={20}
						color="black"
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

export default AuthorItemList;
