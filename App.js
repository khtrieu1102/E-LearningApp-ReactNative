import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthorizationStack from "./src/components/authorization/authorizationStack";
import MainTabNavigation from "./src/components/main/mainNavigation";
import { useSelector, useDispatch } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import actionCreators from "./src/redux/action-creators";

export default function App() {
  const authorizationReducer = useSelector((state) => state.authorizationReducer);
  const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
  const dispatch = useDispatch();
  const { theme } = appSettingsReducer;
  const { isAuthenticated, role } = authorizationReducer;
  let TokenFromAsyncStorage;

  const _getTokenFromStorage = async () => {
    await AsyncStorage.getItem("token", (error, result) => {
      if (result != null) {
        TokenFromAsyncStorage = result;
        dispatch(actionCreators.authorization.getUserAndVerifyToken(result));
        return;
      }
      dispatch(actionCreators.authorization.userLogout());
    })
  }
  
  useEffect(() => {
    _getTokenFromStorage();
  }, [TokenFromAsyncStorage])

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
        <FlashMessage 
          position="top" 
          autoHide={false}
          style={{ paddingTop: "30" }}
        />
      </NavigationContainer>
  );
}
