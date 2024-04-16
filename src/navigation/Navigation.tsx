import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    WelcomeScreen,
    MenuItemsFlatList,
    MenuItemsSectionList,
    LoginScreen,
} from '../components';
import IconCustom from '../components/IconCustom';
import Icon from 'react-native-vector-icons/Ionicons';
// import Ionicons from '@expo/vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export enum Routes {
    LoginScreen = 'LoginScreen',
    Welcome = 'Welcome',
    MenuItemsFlatList = 'MenuItemsFlatList',
    MenuItemsSectionList = 'MenuItemsSectionList',
    BottomTabNavigators = 'BottomTabNavigators'
};

export type RootStackParamList = {
    LoginScreen: undefined;
    Welcome: undefined;
    MenuItemsFlatList: undefined;
    MenuItemsSectionList: undefined;
    BottomTabNavigators: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

function BottomTabNavigators() {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'white',
            },
        }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName: 'home'; // Initialize iconName with a default value
        //     if (route.name === 'Welcome') {
        //       iconName = focused ? 'home' : 'home-outline';
        //     } else if (route.name === 'MenuItemsFlatList') {
        //       iconName = focused ? 'list' : 'list-outline';
        //     }
        //     return <Ionicons name={iconName} size={size} color={color} />;
        // },
        // tabBarActiveTintColor: 'tomato',
        // tabBarInactiveTintColor: 'gray',
        // })}
        >
            
            <Tab.Screen 
                name='Welcome' 
                component={WelcomeScreen}
                options={{
                    tabBarShowLabel: false,
                    // tabBarIcon: ({ color, focused }) => (
                    //     <Ionicons name='md-checkmark-circle' size={32} color='green' />
                    // ),
                }} 
            />
            <Tab.Screen name='MenuItemsFlatList' component={MenuItemsFlatList} options={{ title: 'Menu Flat' }} />
            <Tab.Screen name='MenuItemsSectionList' component={MenuItemsSectionList} options={{ title: 'Menu Section' }} />
        </Tab.Navigator>
    );
}

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}
            >
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name='BottomTabNavigators' component={BottomTabNavigators} options={{headerShown: false}} />
                {/* <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen name='MenuItemsFlatList' component={MenuItemsFlatList} options={{ title: 'Menu' }} />
                <Stack.Screen name='MenuItemsSectionList' component={MenuItemsSectionList} options={{ title: 'Menu' }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};