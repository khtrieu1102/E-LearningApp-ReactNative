import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {	
    const navigation = useNavigation();
    const [timer, setTimer] = useState(0);
    const [title, setTitle] = useState("loading...");
    const textColor = "black";

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(c => c + 1);
            setTitle(`loading ${timer}%...`);
        }, 50);
        if (timer == 100) {
            clearInterval(interval);
            setTimeout(() => {
                console.log("abc");
            }, 1000)
            navigation.navigate("Authorization/AuthorizationHome");
        }

        return () => {
            clearInterval(interval);
        }
    }, [timer]);
    
	return (
		<View
			style={{
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "stretch",
				maxWidth: 500,
				marginLeft: "5%",
				marginRight: "5%",
				height: "100%",
			}}
		>
			<Text style={{ color: textColor }}>{title}</Text>
		</View>
	);
};

export default SplashScreen;
