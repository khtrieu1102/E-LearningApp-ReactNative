import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Login from "./src/components/authorization/log-in/log-in.view"
import Register from "./src/components/authorization/register/register.view"
import ForgotPassword from "./src/components/authorization/forgot-password/forgot-password.view"
import AuthorizationHome from "./src/components/authorization/authorization-home/authorization-home.view"
import Home from "./src/components/main/home/home.view"
import FavoriteCourses from "./src/components/main/favorite-courses/favorite-courses.view"

import AuthorizationStack from "./src/components/authorization/authorizationStack"

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AuthorizationStack />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: "3%"
  },
});
