import React, { useState } from "react";
import { Text, ScrollView, Image, View, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../../../redux/action-creators"
import helpers from "../../../helpers"

const UserProfile = ({ route }) => {
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const dispatch = useDispatch();
    const authorizationReducer = useSelector((state) => state.authorizationReducer);
    const { userInfo } = authorizationReducer;
	const { theme } = appSettingsReducer;
    const textColor = theme.primaryTextColor;
    const [formData, setFormData] = useState({
        name: userInfo?.name || "",
        phone: userInfo?.phone || "",
        avatar: userInfo?.avatar || ""
    });

    const onSubmit = () => {
        if (formData.name == "" || formData.phone == "" || formData.avatar == "") {
			return helpers.FlashMessageFunc.showSimpleError("Please fill in every form fields!");
        }
        dispatch(actionCreators.authorization.updateMeBasicInfo(formData.name, formData.phone, formData.avatar));
    }

	return (
		<ScrollView
			style={{ flex: 1}}
		>
			<View>
				<Image
					source={{ uri: userInfo.avatar }}
					style={{ borderRadius: 50, width: 80, height: 80, alignSelf: "center", marginTop: 10 }}
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
					{userInfo.name || userInfo.type}
				</Text>
				<Text
					style={{
						alignSelf: "center",
                        fontSize: 14,
                        paddingBottom: 10,
						color: textColor
					}}
				>
					{userInfo.type}
				</Text>
                <View style={{
                    flexDirection: "row",
                    paddingBottom: 10,
                    justifyContent: "space-between"
                }}>
                    <Text
                        style={{
                            fontSize: 14,
                            alignSelf: "center",
                            color: textColor,
                            width: "35%"
                        }}
                    >
                        Name
                    </Text>                    
                    <TextInput 
                        style={{
                            borderColor: "gray",
                            borderWidth: 2,
                            padding: 10,
                            borderRadius: 10,
                            width: '65%',
                            maxWidth: "65%",
                            color: theme.primaryTextColor
                        }}
                        placeholder="Type here..."
                        value={formData.name}
                        onChangeText={(text) => {
                            setFormData({ ...formData, name: text });
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    paddingBottom: 10,
                    justifyContent: "space-between"
                }}>
                    <Text
                        style={{
                            fontSize: 14,
                            alignSelf: "center",
                            color: textColor,
                            width: "35%"
                        }}
                    >
                        Phone number
                    </Text>                    
                    <TextInput 
                        style={{
                            borderColor: "gray",
                            borderWidth: 2,
                            padding: 10,
                            borderRadius: 10,
                            width: '65%',
                            maxWidth: "65%",
                            color: theme.primaryTextColor
                        }}
                        placeholder="Type here..."
                        value={formData.phone}
                        onChangeText={(text) => {
                            setFormData({ ...formData, phone: text });
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    paddingBottom: 10,
                    justifyContent: "space-between"
                }}>
                    <Text
                        style={{
                            fontSize: 14,
                            alignSelf: "center",
                            color: textColor,
                            width: "35%"
                        }}
                    >
                        Avatar Link
                    </Text>                    
                    <TextInput 
                        style={{
                            borderColor: "gray",
                            borderWidth: 2,
                            padding: 10,
                            borderRadius: 10,
                            width: '65%',
                            maxWidth: "65%",
                            color: theme.primaryTextColor
                        }}
                        placeholder="Type here..."
                        value={formData.avatar}
                        onChangeText={(text) => {
                            setFormData({ ...formData, avatar: text });
                        }}
                    />
                </View>
    			<Button
					style={{
						alignSelf: "center",
						textAlign: "center",
						fontSize: 14,
						width: 80,
						backgroundColor: "blue",
					}}
                    title="Save"
                    onPress={onSubmit}
				/>
			</View>
		</ScrollView>
	);
};

export default UserProfile;
