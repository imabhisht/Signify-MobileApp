import { SimpleLineIcons , Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import * as React from 'react';
import {View , TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import HeaderSkin from '../components/HeaderSkin'

import {auth} from '../firebase'
import ChatScreen from '../screens/ChatListRoom/ChatScreen';


const ChatRoomStack = createStackNavigator();

export default function(){
    const colorScheme = useColorScheme();

    return(
    <ChatRoomStack.Navigator>
        <ChatRoomStack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown: false}}/>
    </ChatRoomStack.Navigator>

    )
}

