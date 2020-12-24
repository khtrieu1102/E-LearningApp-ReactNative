import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthorizationStack from "./src/components/authorization/authorizationStack"
import MainTabNavigation from "./src/components/main/mainNavigation"

import { useSelector } from 'react-redux';

import FlashMessage from "react-native-flash-message";

export default function App() {
  const authorizationReducer = useSelector((state) => state.authorizationReducer);
  const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
  const { theme } = appSettingsReducer;
  const { isAuthenticated, role } = authorizationReducer;

  return (
      <NavigationContainer>
        { !isAuthenticated && 
          <View style={{ flex: 1, backgroundColor: theme.primaryBackgroundColor }}>
            <AuthorizationStack />
          </View>
        }

        {
          isAuthenticated && 
          <View style={{
              flex: 1,
              backgroundColor: theme.primaryBackgroundColor,
            }}
          >
            <MainTabNavigation />
          </View>
        }
        <FlashMessage position="top" /> {/* <--- here as last component */}
      </NavigationContainer>
  );
}
