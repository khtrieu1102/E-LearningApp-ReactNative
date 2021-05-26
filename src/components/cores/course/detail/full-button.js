import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FullButton = ({ buttonName, handlePress }) => (
    <TouchableOpacity
        style={{
            backgroundColor: "#dedede",
            flexDirection: "column",
            borderRadius: 10,
            marginBottom: 10,
        }}
        onPress={handlePress}
    >
        <Text
            style={{
                flex: 1, 
                color: "black",
                alignSelf: "center",
                fontSize: 12,
                padding: 15,
            }}
        >
            {buttonName}
        </Text>
    </TouchableOpacity>
);

export default FullButton;