import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LoginAuth from '../screens/LoginAuth';
import LoginScreen from '../screens/LoginScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import OTPScreen from '../screens/OTPScreen';
import RootScreen from '../screens/RootScreen';
import StartProfileScreen from '../screens/StartProfileScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import {auth} from '../firebase'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [start,setStart] = React.useState("")
  React.useEffect(() => {
    auth().onAuthStateChanged((authuser) => {
      if(authuser){
        setStart('MainTabNavigator')
      }else{
        setStart('LoginNavigator')
      }
    });  
  })
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator startScreen={start}/>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator();
const LoginStack = createStackNavigator();

function LoginNavigator() {
  return(
  <LoginStack.Navigator >
    <LoginStack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
    <LoginStack.Screen name="OTPScreen" component={OTPScreen} options={{headerShown: false}}/>
    <LoginStack.Screen name="StartProfileScreen" component={StartProfileScreen} options={{headerShown: false}}/>
  </LoginStack.Navigator>
  );
}

function RootNavigator({startScreen}) {
  console.log(typeof(startScreen))
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={startScreen}>

      <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
      <Stack.Screen name="MainTabNavigator" component={BottomTabNavigator}/>
       
      <Stack.Screen name="NotFound" component={LoginAuth} options={{ title: 'Oops!' }} />
    </Stack.Navigator>  
  );
}


