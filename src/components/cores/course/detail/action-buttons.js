import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Description from "../../description/description";

const Actions = (props) => {
	const navigation = useNavigation();
	const { description, onAddToFavorite, onRemoveFromFavorite } = props;
	const handlePress = () => {
		console.log("Go to author name");
		// navigation.navigate("AuthorDetail", { authorDetails: authorDetails });
	};

	const CircleButton = ({ buttonName, handlePress }) => (
		<TouchableOpacity
			style={{
				marginRight: 20,
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
				}}
				onPress={handlePress}
			/>
			<View>
				<Text style={{ alignSelf: "center" }}>{buttonName}</Text>
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
					color: "black",
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
				<CircleButton handlePress={handlePress} buttonName="Bookmark" />
				<CircleButton handlePress={handlePress} buttonName="Channel" />
				<CircleButton handlePress={onAddToFavorite} buttonName="Downloads" />
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
