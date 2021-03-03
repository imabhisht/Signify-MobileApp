import React, { useState, useCallback, useEffect , useLayoutEffect} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {View,StyleSheet,Text, TouchableOpacity , KeyboardAvoidingView , Platform ,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'
import chatMessage from '../../firebaseBackend/DummyMessages'
import ChatMessage from '../../components/ChatMessage';

const ChatScreen = ({navigation, route}) => {
    const userid = route.params.userid;
    const backPressed = () => {
        navigation.navigate('ChatList')
    }
    const optionsPressed = () => {
        alert('Options Pressed')
    }

    useLayoutEffect(() => {
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
                                    <Ionicons name="ios-options-outline" size={24} color="black" />
                                </TouchableOpacity> 
                        </View>
                    </View>
                )
            },
            headerBackImage: () =>{
                return(
                    <Ionicons name="chevron-back-sharp" size={29} color="black" style={styles.leftLogo}/>
                )
            }
        

        })
        
    }, [navigation])

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])

      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])
    

    return(
        <View style={styles.container}>
    
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={styles.keyboardAvoid}
            keyboardVerticalOffset={90}
            >
                <FlatList 
                data={chatMessage}
                renderItem = {({item}) => <ChatMessage message={item} />}
                />
            </KeyboardAvoidingView> */}
        <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
        
        </View>
    )
}

export default ChatScreen;

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