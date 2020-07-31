import React from 'react';
import {

} from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Openning from './src/components/openning';
import Login from './src/components/login';
import SignUp from './src/components/signUp';

import SporPage from './src/components/sporPage';
import Oneri from './src/components/oneri';
import MainPage from './src/components/mainPage';
import NewEvent from './src/components/newEvent';
import Events from './src/components/events';

import Messeages from './src/components/messeages';
import YabanciPage from './src/components/YabanciPage';
import Message from './src/components/messeage';

import MainStore from './src/components/store';


console.disableYellowBox = true; 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const isLogin = false


function AnaStack() {
  return (
    <Stack.Navigator>
     
      <Stack.Screen name="Ana Sayfa" 
        component={MainPage} 
        options = {{
          headerShown: false,
        }}
        
      />
      <Stack.Screen name="Yabancı Dil" component={YabanciPage} options = {{headerStyle: {backgroundColor: '#cae7fd'},headerTitleStyle: {fontFamily: 'Quicksand'}, headerBackTitle : " "}} />
      <Stack.Screen name="Öneri" component={Oneri} options = {{headerTitleStyle: {fontFamily: 'Quicksand'},}}/>
      <Stack.Screen name="Spor" component={SporPage} options = {{headerStyle: {backgroundColor: '#fff9cd', shadowColor: 'transparent'},headerTitleStyle: {fontFamily: 'Quicksand'}, headerBackTitle : " "}}/>
      <Stack.Screen name="Events" component={Events} options = {{headerTitleStyle: {fontFamily: 'Quicksand'},}} />
      <Stack.Screen name="NewEvent" component={NewEvent} options = {{headerTitleStyle: {fontFamily: 'Quicksand'},}} />
      <Stack.Screen name = "Mesaj" component = {Message} options = {{headerStyle: {backgroundColor: '#fff9cd' ,shadowColor: 'transparent'},headerTitleStyle: {fontFamily: 'Quicksand'},title : MainStore.sender , tabBarVisible: 'false'}}/>
    </Stack.Navigator>
  );  
}

function MesajStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Mesajlar" component = {Messeages} />
      <Stack.Screen name = "Mesaj" component = {Message} options = {{headerStyle: {fontFamily: 'Quicksand',backgroundColor: '#FF9357' ,shadowColor: 'transparent'},title : MainStore.sender,headerTitleStyle: {fontFamily: 'Quicksand'}, tabBarVisible: 'false'}}/>
    </Stack.Navigator>
  )
}

MesajStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  for (let i = 0; i < navigation.state.routes.length; i++) {
    if (navigation.state.routes[i].routeName == "Comments") {
      tabBarVisible = false;
    }
  }

  return {
    tabBarVisible
  };
};

function TabBar() {
  return (
    <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Ana Sayfa') {
              iconName = 'home'
            } else if (route.name === 'Mesajlar') {
              iconName = 'envelope';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Ana Sayfa" component={AnaStack}/>
        <Tab.Screen name="Mesajlar" component={MesajStack} />
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Openning" component={Openning} options = {{headerShown: false}} />
          <Stack.Screen name="Giris" component={Login} options = {{ headerTitle: "", headerBackTitle: " ", headerTitleStyle: {fontFamily: 'Quicksand'},}} />
          <Stack.Screen name="Kayit" component={SignUp} options = {{ headerTitle: "", headerBackTitle: " " ,headerTitleStyle: {fontFamily: 'Quicksand'},}} />
          <Stack.Screen name="App" component= {TabBar} options = {{headerShown : false ,headerTitleStyle: {fontFamily: 'Quicksand'},}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


