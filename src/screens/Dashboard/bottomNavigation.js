import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '.';
import ProfileScreen from '../profileScreens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/styles';
import Setting from '../settings';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Dashboard} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={25} color={colors.common} />
                    ),
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="person-outline" size={25} color={colors.common} />
                    )
                }} />
                <Tab.Screen name="Setting" component={Setting} options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="settings-outline" size={25} color={colors.common} />
                    ),
                }} />
            </Tab.Navigator>
        </>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})
