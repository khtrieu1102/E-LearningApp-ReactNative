import React from "react";
import { Text, ScrollView, Image, View, TouchableOpacity } from "react-native";

import VerticalSectionCourses from "../section-courses/vertical-section-courses";
import Description from "../description/description";
import { useNavigation, useRoute } from "@react-navigation/native";

const PathDetail = ({ }) => {
	
	const route = useRoute();
	const {
		id,
		pathName,
		amount,
		description,
		duration,
	} = route.params.pathDetails;
	const courses = [
		{
			id: 1,
			title: "React: The Big Picture",
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
		{
			id: 9,
			title: "The first 20 hours -- how to learn anything",
			author: "Josh Kaufman",
			level: "Beginner",
			released: "April 21, 2020",
			duration: "1h",
		},
		{
			id: 10,
			title: "How to Get Your Brain to Focus",
			author: "Chris Bailey",
			level: "Immediate",
			released: "March 1, 2020",
			duration: "38m",
		},
		{
			id: 11,
			title: "Inside the mind of a master procrastinator",
			author: "Tim Urban",
			level: "Beginner",
			released: "May 1, 2020",
			duration: "2h",
		},
		{
			id: 12,
			title: "How to motivate yourself to change your behavior",
			author: "Tali Sharot",
			level: "Advance",
			released: "June 2, 2020",
			duration: "3h",
		},
		{
			id: 13,
			title: "How to Achieve Your Most Ambitious Goals",
			author: "Stephen Duneier",
			level: "Beginner",
			released: "January 1, 2020",
			duration: "2h",
		},
		{
			id: 14,
			title: "The first 20 hours -- how to learn anything",
			author: "Josh Kaufman",
			level: "Beginner",
			released: "April 21, 2020",
			duration: "1h",
		},
		{
			id: 15,
			title: "How to Get Your Brain to Focus",
			author: "Chris Bailey",
			level: "Immediate",
			released: "March 1, 2020",
			duration: "38m",
		},
		{
			id: 16,
			title: "Inside the mind of a master procrastinator",
			author: "Tim Urban",
			level: "Beginner",
			released: "May 1, 2020",
			duration: "2h",
		},
		{
			id: 17,
			title: "How to motivate yourself to change your behavior",
			author: "Tali Sharot",
			level: "Advance",
			released: "June 2, 2020",
			duration: "3h",
		},
		{
			id: 18,
			title: "How to Achieve Your Most Ambitious Goals",
			author: "Stephen Duneier",
			level: "Beginner",
			released: "January 1, 2020",
			duration: "2h",
		},
		{
			id: 19,
			title: "The first 20 hours -- how to learn anything",
			author: "Josh Kaufman",
			level: "Beginner",
			released: "April 21, 2020",
			duration: "1h",
		},
	];
	const navigation = useNavigation();

	return (
		<ScrollView
			style={{ flex: 1, backgroundColor: "white" }}
		>
			<View
				style={{
					backgroundColor: "white",
					flexDirection: "row",
					paddingTop: 10,
				}}
			>
				<View
					style={{
						width: "90%",
						backgroundColor: "white",
						flexDirection: "row",
						justifyContent: "flex-start",
						marginBottom: 10,
					}}
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
								fontSize: 30,
							}}
							numberOfLines={1}
						>
							{pathName}
						</Text>
						<Text style={{ color: "#979ba1", fontSize: 14, paddingTop: 3 }}>
							{amount} courses - {duration} hours
						</Text>
					</View>
				</View>
			</View>
			<Description description={description} />
			<VerticalSectionCourses />
		</ScrollView>
	);
};

export default PathDetail;
