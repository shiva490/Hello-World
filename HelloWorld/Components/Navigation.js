import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import NextScreen from './NextScreen'; // Change this to the actual name of your next screen component

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;