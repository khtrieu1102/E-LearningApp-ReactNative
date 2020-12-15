import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import Creators from "../../../redux/action-creators";

const LanguageSettings = ({ onPress }) => {
	const dispatch = useDispatch();
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const { theme, languageName } = appSettingsReducer;
    
    const toggleLanguage = () => {
        if (languageName == "vietnamese") {
            dispatch(Creators.appSettings.setTheme("english"));
        }
        else dispatch(Creators.appSettings.setTheme("vietnamese"));
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
                onPress={toggleLanguage}
            >
                <Text
                    style={{
                        flex: 1,
                        color: theme.primaryTextColor,
                        fontSize: 15,
                        paddingLeft: 5,
                    }}
                >
                    Vietnamese
                </Text>
                {
                    languageName == "vietnamese" &&
                    <Ionicons
                        style={{ paddingLeft: 5, paddingRight: 5 }}
                        name="ios-checkmark"
                        size={32}
                        color="#8a92a1"
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
                onPress={toggleLanguage}
            >
                <Text
                    style={{
                        flex: 1,
                        color: theme.primaryTextColor,
                        fontSize: 15,
                        paddingLeft: 5,
                    }}
                >
                    English
                </Text>
                {
                    languageName == "english" &&
                    <Ionicons
                        style={{ paddingLeft: 5, paddingRight: 5 }}
                        name="ios-checkmark"
                        size={32}
                        color="#8a92a1"
                    />
                }
            </TouchableOpacity>
        </View>
	);
};

export default LanguageSettings;
