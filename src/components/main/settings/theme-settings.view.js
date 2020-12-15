import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ActionCreators from "../../../redux/action-creators";

const ThemeSettings = ({ onPress }) => {
	const dispatch = useDispatch();
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme, themeName } = appSettingsReducer;
  	const toggleSwitch = () => {
		if (themeName == "light") dispatch(ActionCreators.appSettings.setTheme(2));
		else dispatch(ActionCreators.appSettings.setTheme(1));
	};
	
	return (
        <View
            style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                height: 50,
                alignItems: "center",
                borderColor: "#8a92a1",
		}}>
            <Text
                style={{
                    flex: 1,
                    color: theme.primaryTextColor,
                    fontSize: 15,
                    paddingLeft: 5,
                }}
            >
                Application Theme
            </Text>
            
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
            }}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={themeName == "light"}
                />
                <Text
                style={{
                    flex: 1,
                    color: theme.primaryTextColor,
                    fontSize: 10,
                    paddingLeft: 5,
                }}
            >
                [{themeName.toUpperCase()}]
            </Text>
            </View>
        </View>
	);
};

export default ThemeSettings;
