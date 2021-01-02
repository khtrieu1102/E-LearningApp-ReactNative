import React, { useState } from "react";
import { Text, ScrollView, Image, View, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../../../redux/action-creators"
import helpers from "../../../helpers"

const PasswordUpdateForm = ({ route }) => {
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const dispatch = useDispatch();
    const authorizationReducer = useSelector((state) => state.authorizationReducer);
    const { userInfo } = authorizationReducer;
	const { theme } = appSettingsReducer;
    const textColor = theme.primaryTextColor;
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        retypeNewPassword: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword == "" || formData.oldPassword == "" || formData.retypeNewPassword == "") {
			return helpers.FlashMessageFunc.showSimpleError("Please fill in every form fields!");
        }
        if (formData.newPassword != formData.retypeNewPassword) {
			return helpers.FlashMessageFunc.showSimpleError("New password and retype are not matched!");
        }
        
        dispatch(actionCreators.authorization.changePassword(userInfo.id, formData.oldPassword, formData.newPassword));
    }

	return (
		<ScrollView
			style={{ flex: 1}}
		>
			<View>
				<View style={{
                    flexDirection: "row",
                    paddingBottom: 10,
                    paddingTop: 10,
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
                        Old password
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
                        secureTextEntry={true}
                        value={formData.oldPassword}
                        onChange={(event) => {
                            setFormData({ ...formData, oldPassword: event.target.value });
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
                        New password
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
                        secureTextEntry={true}
                        value={formData.newPassword}
                        onChange={(event) => {
                            setFormData({ ...formData, newPassword: event.target.value });
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
                        Retype new password
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
                        secureTextEntry={true}
                        value={formData.retypeNewPassword}
                        onChange={(event) => {
                            setFormData({ ...formData, retypeNewPassword: event.target.value });
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
                    title="Update"
                    onPress={(e) => onSubmit(e)}
				/>
			</View>
		</ScrollView>
	);
};

export default PasswordUpdateForm;
