import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const LanguageSettings = ({ onPress }) => {
	const dispatch = useDispatch();
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
	const { theme, themeName } = appSettingsReducer;
	
	return (
        <View>
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
                    Vietnamese
                </Text>
                <Ionicons
                    style={{ paddingLeft: 5, paddingRight: 5 }}
                    name="ios-checkmark"
                    size={32}
                    color="#8a92a1"
                />
            </View>
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
                    English
                </Text>
                <Ionicons
                    style={{ paddingLeft: 5, paddingRight: 5 }}
                    name="ios-checkmark"
                    size={32}
                    color="#8a92a1"
                />
            </View>
        </View>
	);
};

export default LanguageSettings;
