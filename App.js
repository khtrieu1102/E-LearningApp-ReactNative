import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthorizationStack from "./src/components/authorization/authorizationStack";
import MainTabNavigation from "./src/components/main/mainNavigation";
import { useSelector, useDispatch } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import actionCreators from "./src/redux/action-creators";
import store from ".//src/redux/store"
import { Provider } from "react-redux";

function App() {
  const authorizationReducer = useSelector((state) => state.authorizationReducer);
  const appSettingsReducer = useSelector((state) => state.appSettingsReducer);
  const dispatch = useDispatch();
  const { theme } = appSettingsReducer;
  const { isAuthenticated, token } = authorizationReducer;
  const backgroundColor = theme.primaryBackgroundColor;
  let TokenFromAsyncStorage;

  const _getTokenFromStorage = async () => {
    await AsyncStorage.getItem("token").then((result) => {
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
          <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            <AuthorizationStack />
          </View>
        }

        {
          isAuthenticated && 
          <View style={{
              flex: 1,
              backgroundColor: backgroundColor,
            }}
            >
            <MainTabNavigation />
          </View>
        }
        {/* <FlashMessage 
          position="top" 
          autoHide={false}
          style={{ paddingTop: "30" }}
        /> */}
      </NavigationContainer>
  );
}

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
