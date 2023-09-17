import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cash from 'react-native-vector-icons/Ionicons';
import Home from '../Home';
import Cadastro from '../Cadastro';
import Login from '../Login';
import App from './app.routes';
import AuthRoutes from './auth.routes';

const Tab = createBottomTabNavigator();

export default function Routes() {
  const [email, setEmail] = useState('email@email.com');
  const [password, setPassword] = useState('123456');
  const [authenticated, setAuthenticated] = useState(false);

  const signin = () => {
    if (email === '' || password === '') {
      console.log('Error');
    } else {
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    signin();
  }, []);

  return (
    <NavigationContainer>
      {authenticated ? <App /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
