import React, { useState } from "react";
import { Text, ScrollView, Image, View, Button, TextInput } from "react-native";
import { useSelector } from "react-redux";

const UserProfile = ({ route }) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme } = appSettingsReducer;
    const textColor = theme.primaryTextColor;
    const [formVariables, setFormVariables] = useState({
        userName: 'Nguyen Ngoc Khac Trieu',
        phoneNumber: '0903020298',
        email: 'khactrieu98@gmail.com'
    });


	return (
		<ScrollView
			style={{ flex: 1}}
		>
			<View>
				<Image
					source={{
						uri:
							"https://cdn.yankodesign.com/images/design_news/2018/10/the-keyboard-like-youve-never-seen-it/fangyuan_mechanical_keyboard_layout.jpg",
					}}
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
					Nguyen Ngoc Khac Trieu
				</Text>
				<Text
					style={{
						alignSelf: "center",
                        fontSize: 14,
                        paddingBottom: 10,
						color: textColor
					}}
				>
					User
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
                        placeholder="Search something..."
                        value={formVariables.userName}
                        onChange={(event) => {
                            setFormVariables({ ...formVariables, userName: event.target.value });
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
                        placeholder="Search something..."
                        value={formVariables.phoneNumber}
                        onChange={(event) => {
                            setFormVariables({ ...formVariables, phoneNumber: event.target.value });
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
                        Email
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
                        placeholder="Search something..."
                        value={formVariables.email}
                        onChange={(event) => {
                            setFormVariables({ ...formVariables, email: event.target.value });
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
				/>
			</View>
		</ScrollView>
	);
};

export default UserProfile;
