import React from "react";
import { Button, Text } from "react-native";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack"
import AuthorizationHome from "./authorization-home/authorization-home.view"
import ForgotPassword from "./forgot-password/forgot-password.view"
import LogIn from "./log-in/log-in.view"
import Register from "./register/register.view"
import SplashScreen from "./splash-screen/splash-screen.view";

const Stack = createStackNavigator();

const AuthorizationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen 
                name="Authorization/AuthorizationHome" 
                component={AuthorizationHome}         
            />
            <Stack.Screen name="Authorization/ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Authorization/LogIn" component={LogIn} />
            <Stack.Screen name="Authorization/Register" component={Register} />
        </Stack.Navigator>
    );
}

export default AuthorizationStack;
