import React from "react";
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

const FeatureCard = ({ title }) => {
	const courses = [
		{
			id: 1,
			title: "How to shift your mindset and choose your future",
			author: "Tom Rivett-Carnac",
			level: "Advance",
			released: "May 6, 2020",
			duration: "2h",
		},
		{
			id: 2,
			title: "What's missing from the American immigrant narrative",
			author: "Elizabeth Camarillo Gutierrez",
			level: "Beginner",
			released: "May 15, 2020",
			duration: "59m",
		},
		{
			id: 3,
			title: "The next outbreak? We’re not ready",
			author: "Bill Gates",
			level: "Advance",
			released: "June 1, 2020",
			duration: "1h30m",
		},
		{
			id: 4,
			title: "The first 20 hours -- how to learn anything",
			author: "Josh Kaufman",
			level: "Beginner",
			released: "April 21, 2020",
			duration: "1h",
		},
		{
			id: 5,
			title: "How to Get Your Brain to Focus",
			author: "Chris Bailey",
			level: "Immediate",
			released: "March 1, 2020",
			duration: "38m",
		},
		{
			id: 6,
			title: "Inside the mind of a master procrastinator",
			author: "Tim Urban",
			level: "Beginner",
			released: "May 1, 2020",
			duration: "2h",
		},
		{
			id: 7,
			title: "How to motivate yourself to change your behavior",
			author: "Tali Sharot",
			level: "Advance",
			released: "June 2, 2020",
			duration: "3h",
		},
		{
			id: 8,
			title: "How to Achieve Your Most Ambitious Goals",
			author: "Stephen Duneier",
			level: "Beginner",
			released: "January 1, 2020",
			duration: "2h",
		},
	];
	const handlePress = () => {
		navigation.navigate("VerticalSectionCourses", courses);
		console.log("Feature Press");
	};
	return (
		<ImageBackground
			style={{ height: 100, marginRight: 10, marginTop: 10 }}
			source={{
				uri:
					"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/5e41e3c7_3174_472a_b85c_ffe35dc7250f_bccff069-05e4-4991-81a5-764ca41e10ad.jpg",
			}}
		>
			<TouchableOpacity
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				onPress={handlePress}
			>
				<Text
					style={{
						fontSize: 24,
						color: "white",
						fontWeight: "bold",
						textAlign: "center",
					}}
				>
					{title}
				</Text>
			</TouchableOpacity>
		</ImageBackground>
	);
};

export default FeatureCard;
