import React from 'react';
import {

} from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Openning from './src/components/openning';
import Login from './src/components/login';
import SignUp from './src/components/signUp';

import SporPage from './src/components/sporPage';
import YanaciPage from './src/components/YabanciPage';
import Oneri from './src/components/oneri';
import MainPage from './src/components/mainPage';
import NewEvent from './src/components/newEvent';
import Events from './src/components/events';

import Messeages from './src/components/messeages';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );  
}

function AnaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ana Sayfa" component={MainPage} />
      <Stack.Screen name="Yabancı Dil" component={Notifications} />
      <Stack.Screen name="Öneri" component={Oneri} />
      <Stack.Screen name="Spor" component={SporPage} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="NewEvent" component={NewEvent} />
    </Stack.Navigator>
  );  
}

function MesajStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Mesajlar" component = {Messeages}/>
    </Stack.Navigator>
  )
}

function AppStack() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={AnaStack} />
        <Tab.Screen name="Settings" component={MesajStack} />
    </Tab.Navigator>
  );
}

const MySwitchNavigator = createSwitchNavigator(
  {
  routeOne: AuthStack,
  routeTwo: AppStack,
  },
  {
    initialRouteName: 'AppStack',
  }
);

export default class App extends React.Component {
  render(){
    return (
      <SwitchNav/>
    )
  }
}