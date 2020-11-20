import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthorizationStack from "./src/components/authorization/authorizationStack"
import MainTabNavigation from "./src/components/main/mainNavigation"
import Logo from "./src/components/authorization/assets/fit-hcmus-logo.png"

// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <MainTabNavigation />
//       </View>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer style={{backgroundColor: "white"}}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
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
