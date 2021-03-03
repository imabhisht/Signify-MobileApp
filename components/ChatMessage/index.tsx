import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ChatMessage = (props: ChatMessageProps) => {

    const { message } = props;

    function isMyMessage(){
        return message.id === '9426323275'
    }

    return(
        <View>
            {isMyMessage() &&
            <View style={styles.meChatBox} >
                <View style={styles.meChatWrapper}>
                    <Text style={styles.meMessage}>{message.message}</Text>
                </View>
            </View>
            }
            {!isMyMessage() && 
            <Text>{message.message}</Text>
            }
        </View>
    )

}

export default ChatMessage;

const styles = StyleSheet.create({

    meChatBox:{
        width: '100%',
        marginVertical: '5%',
    },

    meChatWrapper:{
        backgroundColor: '#0277ff',
        width: '60%',
        padding: 10,
        borderRadius: 10
    },
    meMessage:{
        color: 'white',
        fontSize: 15
    }
})