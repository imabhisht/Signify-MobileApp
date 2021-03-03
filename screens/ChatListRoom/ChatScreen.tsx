import React, { useState, useCallback, useEffect } from 'react'
import {View,StyleSheet,Text, TouchableOpacity , KeyboardAvoidingView , Platform ,FlatList} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Bubble, GiftedChat , InputToolbar, SystemMessage} from 'react-native-gifted-chat'
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase'
import {auth,db} from '../../firebase'; 


export default function Example({navigation, route}) {

    const userid = route.params.userid;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            
            headerStyle:{
                shadowColor: 'transparent',
                backgroundColor: '#fff', 
                elevation:0,
            },
            
            headerTitle: () => {
                return(
                    <View style={styles.headerWrapper}>
                        <View style={styles.centerWrapper}>
                            <View style={styles.userNameWrapper}>
                                <Text style={styles.userName}>{userid}</Text>                        
                            </View>
                            <View style={styles.lastSeenWrapper}>
                                <Text style={styles.userLastSeen}>10 min ago</Text>                        
                            </View>
                        </View>

                        <View style={styles.rightWrapper}>
                                <TouchableOpacity>
                                    <Ionicons name="ios-options-outline" size={24} color="gray" />
                                </TouchableOpacity> 
                        </View>
                    </View>
                )
            },
            headerBackImage: () =>{
                return(
                    <Ionicons name="chevron-back-sharp" size={29} color="gray" style={styles.leftLogo}/>
                )
            }
        

        })
        
    }, [navigation])


  const [messages, setMessages] = useState([]);
  const [input,setInput] = useState('');

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ])
  // }, [])
 
  // const onSend = useCallback((messages = []) => {
  //   setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  // }, [])
 

  React.useLayoutEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, [input])

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
            b
        }}
       
      />
    );
  };

  const customSystemMessage = props => {
    return (
      <View style={styles.ChatMessageSytemMessageContainer}>
        <Icon name="lock" color="#9d9d9d" size={16} />
        <Text style={styles.ChatMessageSystemMessageText}>
          Your chat is secured. Remember to be cautious about what you share
          with others.
        </Text>
      </View>
    );
  };


  const sendMessage = () => {

    db.collection('chats').doc('9426323275').collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input
    })

    setInput('');
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={sendMessage}
      // user={{
      //   _id: 1,
      // }}
      messagesContainerStyle={{
          paddingBottom: 5,
      }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            textStyle={{
              right: {
                color: 'white',
              },
            }}
            wrapperStyle={{
              left: {
                backgroundColor: '#ffffff',
                padding: 5
              },
              right: {
                backgroundColor:'#0284fe',
                padding: 5
              },
            }}
          />
        );
     
     
      }}

      renderInputToolbar={props =>{
        return(
          <InputToolbar
            {...props}
            containerStyle={{
              maxHeight: 50
            }}

          />
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
    container:{

    },
    headerWrapper:{
       backgroundColor: 'white',
       //marginTop: '10%',
       justifyContent: 'space-between',
       flexDirection: 'row',
       paddingHorizontal: '2%',
       paddingBottom: '5%',
       width: '100%'

    },
    leftWrapper:{
        alignContent: 'center',
       justifyContent: 'center',
    
    },
    centerWrapper:{
        alignContent: 'center',
       justifyContent: 'center',
       width: '80%',
    },
    userName:{
        fontSize: 25,
        fontWeight: '900',
        color: '#494a4e'
    },
    userLastSeen:{
        fontSize: 12,
        color: 'gray'
    },
    userNameWrapper:{
        alignItems: 'center',
        width: '100%'
    },
    lastSeenWrapper:{
        
        alignContent: 'center',
        alignItems: 'center'
    },
    
    rightWrapper:{
        alignContent: 'center',
       justifyContent: 'center',
    },

})