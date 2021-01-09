import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CircleButton = ({ buttonName, iconName, iconColor, handlePress, textColor }) => (
    <View style={{ alignItems: "center" }}>
        <TouchableOpacity
            style={{
                borderRadius: 50,
                width: 50, 
                height: 50,
                backgroundColor: "#dedede",
                justifyContent: "center",
                alignItems: "center"
            }}
            onPress={handlePress}
        >
            <Ionicons
                name={iconName}
                size={32}
                color={iconColor}
            />
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", color: textColor }}>{buttonName}</Text>
    </View>
);

export default CircleButton;