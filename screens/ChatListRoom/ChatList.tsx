import { CardStyleInterpolators } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView,ScrollView ,StyleSheet, Text, View,FlatList } from 'react-native'
import ChatListItem from '../../components/ChatListItem'
import { SearchBar } from 'react-native-elements';
import DummyChatRoom from '../../firebaseBackend/DummyChatRoom'
const ChatList = ({navigation}) => {
    const [search,setSearch] = React.useState("")

    return (
       <SafeAreaView style={styles.container}>
           <SearchBar 
                placeholder={"Search"}
                platform={"default"}
                lightTheme
                containerStyle={{
                    backgroundColor: 'white',
                    borderWidth: 0,
                    width: '100%',
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent',
                    marginTop: '10%',
                    paddingHorizontal: '5%'
                    
                }}
                inputContainerStyle={{
                    borderRadius: 25,
                    backgroundColor: '#ebebeb',
                }}
                inputStyle={{
                    fontSize: 15,
                    color: 'black'
                }}/>
                <View style={styles.headingWrapper}>
                    <Text style={styles.headingText}>Messages</Text>
                </View>
                <View>
                    <FlatList
                    data={DummyChatRoom}
                    renderItem={ ({item}) => <ChatListItem chatRoom={item} navigation={navigation}/>} />      
                </View>
       </SafeAreaView>
    )
}

export default ChatList

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: 'white',
        flex: 1
    },
    screenContent:{
        paddingHorizontal: '4%'
    },
    searchStyle:{
        backgroundColor: 'white'
    },
    headingWrapper:{
        marginVertical: '3%'
    },
    headingText:{
        paddingHorizontal: '6%',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#45454f'        
    }
})
