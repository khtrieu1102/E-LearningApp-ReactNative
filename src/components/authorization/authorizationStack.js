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
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false}} />
            <Stack.Screen 
                name="Authorization/AuthorizationHome" 
                component={AuthorizationHome}
                options={{ headerShown: false}}
            />
            <Stack.Screen name="Authorization/ForgotPassword" component={ForgotPassword} options={{ headerShown: false}} />
            <Stack.Screen name="Authorization/LogIn" component={LogIn} options={{ headerShown: false}} />
            <Stack.Screen name="Authorization/Register" component={Register} options={{ headerShown: false}} />
        </Stack.Navigator>
    );
}

export default AuthorizationStack;
