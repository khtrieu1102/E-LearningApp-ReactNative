import React, { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';

const HomeSplashScreen = ({  }) => {	
    const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
    const authorizationReducer = useSelector((state) => state.authorizationReducer);
    const { isAuthenticated } = authorizationReducer;
    const { theme, languageName } = appSettingsReducer;

    const navigation = useNavigation();
    const [timer, setTimer] = useState(90);
    const [title, setTitle] = useState("Loading...");

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(c => c + 1);
            setTitle(`${languageName == "vietnamese" ? "Đang tải" : "Loading"} ${timer}%...`);
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
                style={{ height: 50, paddingBottom: 100 }}
            />
            <Button onPress={() => navigation.navigate("Home/Dashboard")} title={languageName == "vietnamese" ? "Về trang chủ" : "Go to homepage"} />
			<Text style={{ color: theme.primaryTextColor }}>{title}</Text>
		</View>
	);
};

export default HomeSplashScreen;
