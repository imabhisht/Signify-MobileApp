import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ChatList = () => {
    return (
        <View style={styles.container}>
            <Text>This is Chat</Text>
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1
    }
})
