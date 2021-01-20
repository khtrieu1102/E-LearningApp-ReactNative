import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FullWidthButton from "../../cores/material/full-width-button"
import { useDispatch, useSelector } from "react-redux";
import actionCreators from "../../../redux/action-creators";

const Settings = () => {
	const appSettingsReducer = useSelector(state => state.appSettingsReducer);
	const { languageName } = appSettingsReducer;
	const navigation = useNavigation();
	const dispatch = useDispatch();

	return (
		<View style={{flex: 1, flexDirection: "column"}}>
			<FullWidthButton text={ languageName == "vietnamese" ? "Thông tin cá nhân" : "Profile Information" } onPress={() => navigation.navigate("Settings/UserProfile")}/>
			<FullWidthButton text={ languageName == "vietnamese" ? "Đổi email" : "Change your Email" } onPress={() => navigation.navigate("Settings/EmailUpdateForm")}/>
			<FullWidthButton text={ languageName == "vietnamese" ? "Đổi mật khẩu" : "Change your Password" } onPress={() => navigation.navigate("Settings/PasswordUpdateForm")}/>
			<FullWidthButton text={ languageName == "vietnamese" ? "Chọn theme" : "Choose theme" } onPress={() => navigation.navigate("Settings/ThemeSettings")}/>
			<FullWidthButton text={ languageName == "vietnamese" ? "Ngôn ngữ" : "Language" } onPress={() => navigation.navigate("Settings/LanguageSettings")}/>
			<FullWidthButton text={ languageName == "vietnamese" ? "Các cài đặt khác" : "More Setting" } onPress={() => console.log("HE")}/>
			<TouchableOpacity
				style={{
					alignItems: "center",
					justifyContent: "center",
					height: 40,
					borderColor: "red",
					borderWidth: 1,
					borderRadius: 5,
					marginTop: 5,
				}}
				onPress={() => { dispatch(actionCreators.authorization.userLogout()); }}
			>
				<Text style={{ color: "red" }}>{ languageName == "vietnamese" ? "ĐĂNG XUẤT" : "LOG OUT"}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Settings;
