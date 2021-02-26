import { SimpleLineIcons , Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import * as React from 'react';
import {View , TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import HeaderSkin from '../components/HeaderSkin'
import ChatList from '../screens/ChatListRoom/ChatList';
import {auth} from '../firebase'

const ChatListRoomStack = createStackNavigator();

export default function(){
    const colorScheme = useColorScheme();

    return(
        <ChatListRoomStack.Navigator>
            <ChatListRoomStack.Screen name="ChatList" component={ChatList}
            options={ChatListScreenHeaderDesign}
            />

        </ChatListRoomStack.Navigator>
    )
}


const styles = StyleSheet.create({
    header:{  
        marginTop: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    },

    leftContain:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerAvatar:{
        
    },
    avatar:{
        width: 40,
        height: 40,
        borderRadius: 30
    },
    headerTitle:{

    },
    title:{
        fontSize:21,
        color: '#45454f',
        letterSpacing: 0.2,
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        marginLeft: '20%'
    },

    button:{
      backgroundColor: 'white', 
      marginHorizontal: 9
    //   padding: 7,
    //   borderRadius: 8,
    //   shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
  
    //   elevation: 5,
    },
    headerButtons:{
        flexDirection: 'row'
    }

  
  })


const ChatListScreenHeaderDesign = () => {
    return(
        {
            headerTitle: () => {
                return(
                  <View style={styles.header}>
                    <View style={styles.leftContain}>
                        <View style={styles.headerAvatar}>
                            <Image 
                            source={{uri: auth().currentUser?.photoURL}}
                            style={styles.avatar}/>
                        </View>
                        <View style={styles.headerTitle}>
                            <Text style={styles.title}>{"Signify"}</Text>
                        </View>
                    </View>


                    <View style={styles.RightContain}>
                        <View style={styles.headerButtons}>
                            <View style={styles.button}>
                                <TouchableOpacity>
                                    <SimpleLineIcons name="options-vertical" size={17} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                  </View>
                );
              },
            headerTitleAlign: 'left',
            headerStyle:{
              elevation: 0,
            },
            // headerRight: () => {
            //   return(
            //     <View>
            //       <TouchableOpacity>
            //         <View style={styles.ChatRoomHeaderRight}>
            //           <Feather name="edit" size={19} color="black" />
            //         </View>
            //         </TouchableOpacity>
            //     </View>
            //   );
            // },
            // headerRightContainerStyle:{
            //     paddingHorizontal: 25,
            //     marginTop: '12.5%'
            // },
            headerTitleStyle:{
              marginTop: '10%',
              fontSize: 22,
            //   paddingHorizontal: '3%',
              color: '#45454f',
              letterSpacing: 0.2,
              fontFamily: 'Roboto_400Regular',
              fontWeight: 'bold'
            },
            // headerLeft: () => {
            //     return(
            //         <View>
            //             <Image source={{uri: 'https://smileworld.in/wp-content/uploads/2020/06/Cool-Boy-Hidden-Face-DP-Images-for-Whatsapp.jpg'}} style={styles.profileImg} />
            //         </View>
            //     );
            // }
        }
    )
}