import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';

const HomeSplashScreen = ({  }) => {	
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const authorizationReducer = useSelector((state) => state.authorizationReducer);
    const { isAuthenticated } = authorizationReducer;
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
                
            }, 1000);
            navigation.navigate("Home/Dashboard");
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
                height: "100%",
                backgroundColor: theme.primaryBackgroundColor
			}}
		>
            <Image
                style={{ height: "50px", paddingBottom: 100 }}
            />
			<Text style={{ color: theme.primaryTextColor }}>{title}</Text>
		</View>
	);
};

export default HomeSplashScreen;
