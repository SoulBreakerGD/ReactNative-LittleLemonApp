import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Navigation } from './src/navigation/Navigation';

function App() {
  return (
    // <>
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <WelcomeScreen />
    //     {/* <MenuItemsFlatList /> */}
    //     {/* <MenuItemsSectionList /> */}
    //     {/* <LoginScreen /> */}
    //   </View>
    //   <View style={styles.footerContainer}>
    //     <LittleLemonFooter />
    //   </View>
    // </>
    <Navigation/>
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