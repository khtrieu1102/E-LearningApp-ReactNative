import React, { useState } from "react";
import { Text, ScrollView, Image, View, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../../../redux/action-creators"
import helpers from "../../../helpers"

const EmailUpdateForm = ({ route }) => {
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const dispatch = useDispatch();
    const authorizationReducer = useSelector((state) => state.authorizationReducer);
    const { userInfo } = authorizationReducer;
	const { theme } = appSettingsReducer;
    const textColor = theme.primaryTextColor;
    const [formData, setFormData] = useState({
        email: userInfo?.email || "",
    });

    const onSubmit = () => {
        const emailIsValid = helpers.Validation.validateEmail(formData.email);
		if (emailIsValid == false || formData.email == "") {
			return helpers.FlashMessageFunc.showSimpleError("Your email is invalid! Try again!");
		}

        dispatch(actionCreators.authorization.updateEmailInfo(formData.email));
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
                        placeholder="Type here..."
                        value={formData.email}
                        onChangeText={(text) => {
                            setFormData({ ...formData, email: text });
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
                    onPress={onSubmit}
				/>
			</View>
		</ScrollView>
	);
};

export default EmailUpdateForm;
