import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/Home/Home'
import BuscarScreen from './pages/Buscar/Buscar'
import ContaScreen from './pages/Conta/Conta'
import CarrinhoScreen from './pages/Carrinho/Carrinho'

import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'ios-home';
                    } else if (route.name === 'Buscar') {
                        iconName = "ios-search"
                    } else if (route.name === 'Conta') {
                        iconName = 'ios-person';
                    } else if (route.name === 'Carrinho') {
                        iconName = 'ios-cart';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeBackgroundColor: '#000000',
                inactiveBackgroundColor: '#000000',
                activeTintColor: '#d2ae6c',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Buscar" component={BuscarScreen} />
            <Tab.Screen name="Conta" component={ContaScreen} />
            <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
        </Tab.Navigator>
    )
}