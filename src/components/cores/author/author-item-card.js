import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux"

const AuthorItemCard = ({ authorDetails }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const { id, authorName, position, description } = authorDetails;
	const navigation = useNavigation();
	const handlePress = () => {
		navigation.navigate("AuthorDetail", { authorDetails: authorDetails });
	};

	return (
		<TouchableOpacity
			style={{
				marginRight: 20,
				height: 150,
				width: 120,
				alignItems: "center",
			}}
			onPress={handlePress}
		>
			<Image
				source={{
					uri:
						"https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
				}}
				style={{ borderRadius: 50, width: 80, height: 80 }}
			/>
			<View style={{ marginTop: 10 }}>
				<Text style={{ alignSelf: "center", color: theme.primaryTextColor }}>{authorName}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default AuthorItemCard;
