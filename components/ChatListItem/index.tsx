import React from 'react'
import { StyleSheet, Text, TextComponent, View, TouchableOpacity } from 'react-native'
import {ListItem,Avatar} from 'react-native-elements'
import {ChatRoom} from '../../types'
import ImageModal from 'react-native-image-modal';
import * as Contacts from 'expo-contacts';
export type ChatListItemProps = {
    chatRoom: ChatRoom;
    navigation: navigation;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const { navigation } = props;
    function chatRoomPressed(){
        
        navigation.navigate('ChatScreen', { userid: chatRoom.id})
    }

    function imageView(){
        navigation.navigate("ImageViewer")
    }
    

    
    return (
    <View>
        <View style={styles.mainContainer}>
            <View style={styles.leftContain}> 
                <TouchableOpacity onPress={imageView}>
                    <Avatar  rounded  size={60} source={{uri: chatRoom.userinfo.uri}}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flexDirection: 'row', width: '100%'}} onPress={chatRoomPressed}>
                    <View style={styles.centerContain}>  
                        <ListItem.Content style={{}}>
                            <ListItem.Title style={styles.userName}>{chatRoom.id}</ListItem.Title>
                            <ListItem.Subtitle style={styles.userlstmsg} numberOfLines={1} ellipsizeMode="tail">{"Agar kal Gym nhi aaya to chulu bhar pani mai dub marunga"}</ListItem.Subtitle>
                        </ListItem.Content>
                    </View>
                    <View style={styles.rightContain}>
                        <View style={styles.rightTexts}>
                            <Text style={styles.lastmsgTxt}>2 min ago</Text>
                            <View style={styles.unreadmsgCircle}>
                                <Text style={styles.unreadTxt}>7</Text>
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
        </View>
    </View>
    );
    }

export default ChatListItem

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '4%',
        paddingRight: '6 %',
        marginVertical: '2%'
    },
    leftContain:{

    },
    centerContain:{
        width: '70%',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 7
    },
    userName:{
        fontSize: 19,
        letterSpacing: 0.2,
        fontWeight: '800',
        fontFamily: 'Roboto_400Regular',
    },
    userlstmsg:{
        width: '95%',
        fontSize: 13,
        color: 'gray'
    },
    rightContain:{
        width: '16%',
        alignContent: 'center',       
    },
    rightTexts:{
        alignItems: 'center',
        alignContent: 'space-between'
    },
    unreadmsgCircle:{
        marginTop: 5,
        backgroundColor: 'red',
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 10
    },
    lastmsgTxt:{
        paddingTop: 11,
        fontSize: 13,
        color: 'gray',

    },
    unreadTxt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
    }

})
