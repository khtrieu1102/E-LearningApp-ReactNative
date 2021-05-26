import React, { useState } from "react";
import { View, FlatList, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import apiMethods from "../../../http-client/api-methods";


const RatingInputFields = ({ courseId }) => {
	const appSettingsReducer = useSelector(state => state.appSettingsReducer);
	const { theme, languageName } = appSettingsReducer;
	const [ formData, setFormData ] = useState({
        courseId: courseId,
		content: "",
		contentPoint: 0,
		formalityPoint: 0,
		presentationPoint: 0
	});
	
	const onSendRating = async () => {
        console.log(formData);
        if (formData.content == "") return;
        await apiMethods.application.httpRateAndReviewCourse(formData.courseId, formData.content, formData.contentPoint, formData.presentationPoint, formData.contentPoint)
            .then(result => console.log(result))
            .catch(error => console.log(error.response));
	}
	
	return (
		<View style={{padding: 10}}>
			<View style={{
					flexDirection: "row", 
					height: 50, 
					borderColor: "gray",
					borderWidth: 2,
					borderRadius: 10,
					justifyContent: "space-between"
				}}
			>
				<TextInput 
					style={{
							width: "90%",
							height: "100%",
							paddingLeft: 5,
							color: theme.primaryTextColor
						}}
						placeholder={languageName == 'vietnamese' ? 
							"Đánh giá khoá học..." :
							"Comment and rate for this course..."
						}
						numberOfLines={2}
						value={formData.content}
						onChangeText={(text) => {
							setFormData({ ...formData, content: text });
					}}
				/>
			</View>
			<View style={{
					flexDirection: "row", 
					height: 50, 
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<Text>{languageName == "vietnamese" ? "Điểm hình thức" : "Formality Point"}</Text>
				<TextInput 
					style={{
							width: "30%",
							height: "100%",
							borderColor: "gray",
							borderWidth: 2,
                            borderRadius: 10,
							paddingLeft: 5,
							color: theme.primaryTextColor,
							textAlign: "center",
                        }}
						numberOfLines={2}
						value={formData.formalityPoint}
						onChangeText={(text) => {
							setFormData({ ...formData, formalityPoint: text });
					}}
				/>
			</View>
            <View style={{
					flexDirection: "row", 
					height: 50, 
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<Text>{languageName == "vietnamese" ? "Điểm truyền đạt" : "Presentation Point"}</Text>
				<TextInput 
					style={{
							width: "30%",
							height: "100%",
							borderColor: "gray",
							borderWidth: 2,
							borderRadius: 10,
							paddingLeft: 5,
							color: theme.primaryTextColor,
							textAlign: "center",
						}}
						numberOfLines={2}
						value={formData.presentationPoint}
						onChangeText={(text) => {
							setFormData({ ...formData, presentationPoint: text });
					}}
				/>
			</View>

			<View style={{
					flexDirection: "row", 
					height: 50, 
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<Text>{languageName == "vietnamese" ? "Điểm nội dung" : "Content Point"}</Text>
				<TextInput 
					style={{
							width: "30%",
							height: "100%",
							borderColor: "gray",
							borderWidth: 2,
							borderRadius: 10,
							paddingLeft: 5,
							color: theme.primaryTextColor,
							textAlign: "center",
						}}
						numberOfLines={2}
						value={formData.contentPoint}
						onChangeText={(text) => {
							setFormData({ ...formData, contentPoint: text });
					}}
				/>
			</View>
			<Button title={ languageName == "vietnamese" ? "Gửi" : "Send"} onPress={onSendRating} />
		</View>
	);
};

export default RatingInputFields;
