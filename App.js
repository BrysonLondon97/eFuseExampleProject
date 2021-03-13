import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import TimeAgo from 'javascript-time-ago'
import {Provider as Profile} from './src/context/ProfileContext'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)

const Stack = createStackNavigator();

const App = () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions = {{headerShown: false}}
          >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

export default () => {
  return (
    <Profile>
      <App />
    </Profile>
  );
}