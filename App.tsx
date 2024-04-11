import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItemsFlatList from "./components/MenuItemsFlatList";
import MenuItemsSectionList from "./components/MenuItemsSectionList";
import LoginScreen from './components/LoginScreen';

function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuItemsFlatList /> */}
        {/* <MenuItemsSectionList /> */}
        {/* <LoginScreen /> */}
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Welcome'>
    //     <Stack.Screen name='Welcome' component={WelcomeScreen} />
    //     <Stack.Screen name='Menu' component={MenuItemsFlatList} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});

export default App;