import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';

const SplashScreen = () => {	
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const { theme } = appSettingsReducer;

    const navigation = useNavigation();
    const [timer, setTimer] = useState(90);
    const [title, setTitle] = useState("Loading...");

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(c => c + 1);
            setTitle(`Loading ${timer}%...`);
        }, 50);
        if (timer == 100) {
            clearInterval(interval);
            setTimeout(() => {
                
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
				alignItems: "center",
				maxWidth: 500,
                height: "100%",
                backgroundColor: theme.primaryBackgroundColor
			}}
		>
            <Image
                style={{ height: "50px", paddingBottom: 100 }}
                source={require("../assets/fit-hcmus-logo.png")}
            />
			<Text style={{ color: theme.primaryTextColor }}>{title}</Text>
		</View>
	);
};

export default SplashScreen;
