import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthorizationStack from "./src/components/authorization/authorizationStack"
import MainTabNavigation from "./src/components/main/mainNavigation"

import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const authorizationReducer = useSelector((state) => state.authorizationReducer);
  const dispatch = useDispatch();
  const { isAuthenticated, role } = authorizationReducer;

  return (
      <NavigationContainer style={{backgroundColor: "white"}}>
        { !isAuthenticated && 
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <AuthorizationStack />
          </View>
        }

        {
          isAuthenticated && 
          <View style={styles.container}>
            <MainTabNavigation />
          </View>
        }
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
