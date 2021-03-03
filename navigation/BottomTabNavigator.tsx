import { Ionicons , FontAwesome, Feather} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import HeaderSkin from '../components/HeaderSkin'
import ChatListRoomNavigatior from './ChatListRoomNavigatior';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme]
  return (
    <BottomTab.Navigator
    tabBarOptions={{
      tabStyle:{
        backgroundColor: '#fafafa',
        paddingBottom: 7,
      },
      activeTintColor: '#45454f',
      showLabel: false
    }}
     >
      <BottomTab.Screen
        name="ProfileScreen"
        component={TabOneNavigator}
        
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => {
            return(
            <View style={{marginTop: -2}}>
            <FontAwesome name="user-o" size={28} color={color} />
            </View>
            );
            }   
        }}
      />

      <BottomTab.Screen
        name="ChatListRoomScreen"
        component={ChatListRoomNavigatior}
        options={{
  
          title: "Chats",
          tabBarIcon: ({ color }) => {
          return(
          <View style={{marginTop: -2}}>
          <Ionicons size={28} name="ios-chatbubble-ellipses-outline" color={color} />
          </View>
          );
        }
  
        }}
      />
      
      <BottomTab.Screen
        name="GroupRoomScreen"
        component={TabOneNavigator}
        options={{
          title:"Groups",
          tabBarIcon: ({ color }) => {
            return(
            <View style={{marginTop: -2}}>
            <Ionicons size={28} name="md-chatbubbles-outline" color={color} />
            </View>
            );
          }
        }}
      />

      <BottomTab.Screen
        name="SettingsScreen"
        component={TabTwoNavigator}
        options={{
          title:"Settings",
          tabBarIcon: ({ color }) => {
            return(
            <View style={{marginTop: -2}}>
            <Ionicons size={28} name="settings-outline" color={color} />
            </View>
            );
          }
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tabs
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChatListRoomNavigatior}
        options={HeaderSkin.ChatRoomSkin}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const styles = StyleSheet.create({
  ChatRoomHeaderRight:{
    backgroundColor: 'white', 
    padding: 7,
    // borderColor:'gray',
    // borderWidth: 0.5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }

})