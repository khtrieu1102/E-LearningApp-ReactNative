import React from "react";
import { View, ScrollView } from "react-native";

import SectionCoursesHeader from "./section-courses-header/section-courses-header";
import CourseItemCard from "../course/course-item-card";

const HorizontalSectionCourses = ({ header }) => {
	const backgroundColor = "white";
	const textColor = "black";
	const courses = [
		{
			id: 1,
			title: "How to shift your mindset and choose your future",
			author: "Tom Rivett-Carnac",
			level: "Advance",
			released: "May 6, 2020",
			duration: "2h",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 2,
			title: "What's missing from the American immigrant narrative",
			author: "Elizabeth Camarillo Gutierrez",
			level: "Beginner",
			released: "May 15, 2020",
			duration: "59m",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 3,
			title: "The next outbreak? We’re not ready",
			author: "Bill Gates",
			level: "Advance",
			released: "June 1, 2020",
			duration: "1h30m",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 4,
			title: "The first 20 hours -- how to learn anything",
			author: "Josh Kaufman",
			level: "Beginner",
			released: "April 21, 2020",
			duration: "1h",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 5,
			title: "How to Get Your Brain to Focus",
			author: "Chris Bailey",
			level: "Immediate",
			released: "March 1, 2020",
			duration: "38m",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 6,
			title: "Inside the mind of a master procrastinator",
			author: "Tim Urban",
			level: "Beginner",
			released: "May 1, 2020",
			duration: "2h",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 7,
			title: "How to motivate yourself to change your behavior",
			author: "Tali Sharot",
			level: "Advance",
			released: "June 2, 2020",
			duration: "3h",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
		{
			id: 8,
			title: "How to Achieve Your Most Ambitious Goals",
			author: "Stephen Duneier",
			level: "Beginner",
			released: "January 1, 2020",
			duration: "2h",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		},
	];

	const onSeeAll = () => {
		console.log(courses);
	};

	return (
		<View style={{ width: "100%", paddingLeft: 10, paddingTop: 20, backgroundColor: backgroundColor }}>
			<SectionCoursesHeader
				header={header}
				showButtonSeeAll={true}
				onSeeAll={onSeeAll}
			/>
			<ScrollView horizontal={true} >
				{courses.map((item, index) => (
					<CourseItemCard
						key={index}
						courseDetails={item}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default HorizontalSectionCourses;
