import React from 'react';
import Login from '../Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
        <AuthStack.Navigator>
        <AuthStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        />
        </AuthStack.Navigator>
  );
};

export default AuthRoutes;