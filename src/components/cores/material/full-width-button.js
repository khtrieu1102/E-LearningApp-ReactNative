import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const FullWidthButton = ({ text, onPress}) => {
	const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const { theme } = appSettingsReducer;
    
	return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                height: 50,
                alignItems: "center",
                borderColor: "#8a92a1",
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    flex: 1,
                    color: theme.primaryTextColor,
                    fontSize: 15,
                    paddingLeft: 5,
                }}
            >
                {text}
            </Text>
            <Ionicons
                style={{ paddingLeft: 5, paddingRight: 5 }}
                name="ios-arrow-forward"
                size={32}
                color="#8a92a1"
            />
        </TouchableOpacity>
	);
};

export default FullWidthButton;
