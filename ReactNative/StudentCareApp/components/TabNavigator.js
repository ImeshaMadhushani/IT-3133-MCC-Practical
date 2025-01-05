import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../Screens/Profile.js';
import Course from '../Screens/Course.js';
import Subject from '../Screens/Subject.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Course') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Subject') {
                        iconName = focused ? 'library' : 'library-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'purple',
                tabBarInactiveTintColor: 'gray',
                headerShown: false, // Remove top header
            })}
        >
            <Tab.Screen name="Profile" component={Profile} initialParams={{ user }} />
            <Tab.Screen name="Course" component={Course} initialParams={{ user }} />
            <Tab.Screen name="Subject" component={Subject} initialParams={{ user }} />
        </Tab.Navigator>
    );
}
