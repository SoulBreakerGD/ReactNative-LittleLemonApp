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
                    tabBarIcon: ({ color, focused }) => (
                        <IconCustom
                            name={focused ? 'home' : 'home-outline'}
                            color={color}
                            focused={focused}
                        />
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'tomato',
                }} 
            />
            <Tab.Screen 
                name='MenuItemsFlatList' 
                component={MenuItemsFlatList} 
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <IconCustom
                            name={focused ? 'information' : 'list'}
                            color={color}
                            focused={focused}
                        />
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'tomato',
                }} 
            />
            <Tab.Screen 
                name='MenuItemsSectionList' 
                component={MenuItemsSectionList} 
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <IconCustom
                            name={focused ? 'information' : 'list'}
                            color={color}
                            focused={focused}
                        />
                    ),
                    // tabBarIcon: ({ color, size }) => (
                    //     <MaterialCommunityIcons name="home" color={color} size={size} />
                    //   ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'tomato',
                }} 
            />
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