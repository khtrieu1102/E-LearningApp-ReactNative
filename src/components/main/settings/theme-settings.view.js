import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import Creators from "../../../redux/action-creators";

const ThemeSettings = ({ onPress }) => {
	const dispatch = useDispatch();
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const { theme, themeName, languageName } = appSettingsReducer;
    
    const toggleTheme = () => {
        if (themeName == "dark") {
            dispatch(Creators.appSettings.setTheme("light"));
        }
        else dispatch(Creators.appSettings.setTheme("dark"));
    }
	
	return (
        <View>
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    height: 50,
                    alignItems: "center",
                    borderColor: "#8a92a1",
                }}
                onPress={toggleTheme}
            >
                <Text
                    style={{
                        flex: 1,
                        color: theme.primaryTextColor,
                        fontSize: 15,
                        paddingLeft: 5,
                    }}
                >
                    Light Theme
                </Text>
                {
                    themeName == "light" &&
                    <Ionicons
                        style={{ paddingLeft: 5, paddingRight: 5 }}
                        name="ios-checkmark"
                        size={32}
                        color="black"
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    height: 50,
                    alignItems: "center",
                    borderColor: "#8a92a1",
                }}
                onPress={toggleTheme}
            >
                <Text
                    style={{
                        flex: 1,
                        color: theme.primaryTextColor,
                        fontSize: 15,
                        paddingLeft: 5,
                    }}
                >
                    Dark Theme
                </Text>
                {
                    themeName == "dark" &&
                    <Ionicons
                        style={{ paddingLeft: 5, paddingRight: 5 }}
                        name="ios-checkmark"
                        size={32}
                        color="white"
                    />
                }
            </TouchableOpacity>
        </View>
	);
};

export default ThemeSettings;
