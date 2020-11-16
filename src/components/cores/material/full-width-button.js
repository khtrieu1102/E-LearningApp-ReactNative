import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FullWidthButton = ({ text, onPress}) => {
	return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                height: 50,
                alignItems: "center",
                borderColor: "#8a92a1",
                backgroundColor: "white",
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    flex: 1,
                    color: "black",
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
