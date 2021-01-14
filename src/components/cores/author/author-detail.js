import React from "react";
import { Text, ScrollView, Image, View, Button } from "react-native";
import { useSelector } from "react-redux"

import VerticalSectionCourses from "../section-courses/vertical-section-courses";
import Description from "../description/description";

const AuthorDetail = ({ route }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
	const textColor = theme.primaryTextColor;

    const authorDetails = {			
        id: 1,
        authorName: "Tom Rivett",
        position: "Pluralsight Author",
        amount: 10,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    };
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

	return (
		<View
			style={{ flex: 1}}
		>
			<View
				style={{
					alignItems: "center",
					alignContent: "center",
					justifyContent: "center",
				}}
			>
				<Image
					source={{
						uri:
							"https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
					}}
					style={{ borderRadius: 50, width: 80, height: 80 }}
				/>
				<Text
					style={{
						alignSelf: "center",
						paddingTop: 5,
						fontWeight: "bold",
						fontSize: 17,
						color: textColor
					}}
				>
					{authorDetails.authorName}
				</Text>
				<Text
					style={{
						alignSelf: "center",
                        fontSize: 14,
                        paddingBottom: 10,
						color: textColor
					}}
				>
					{authorDetails.position}
				</Text>
				<Button
					style={{
						alignSelf: "center",
						textAlign: "center",
						fontSize: 14,
						width: 80,
						backgroundColor: "blue",
					}}
					title="Follow"
				>
					Follow
				</Button>
				<Text
					style={{
						alignSelf: "center",
						textAlign: "center",
						marginTop: 10,
						fontSize: 14,
						color: textColor
					}}
				>
					Follow to be notified when new courses are published
				</Text>
			</View>
			<Description description={authorDetails.description} />
			<VerticalSectionCourses />
		</View>
	);
};

export default AuthorDetail;
