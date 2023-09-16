import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import List from '../ListagemGastos';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cash from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Home" component={Home}  options={{ 
                headerShown: false,  tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ), tabBarActiveTintColor: '#031A6E', tabBarInactiveTintColor: 'gray' }} />
              <Tab.Screen name="Cadastrar" component={List}  options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
              <Cash name="cash-outline" color={color} size={size}/>
            ), tabBarActiveTintColor: '#031A6E', tabBarInactiveTintColor: 'gray' }} />
          </Tab.Navigator>
      </NavigationContainer>
    );
}
