import {View,StyleSheet} from 'react-native'
import { Ionicons , FontAwesome, Feather} from '@expo/vector-icons';

const ChatRoomHeaderRight = () =>{
    return(
        <View>
            <View style={styles.ChatRoomHeaderRight}>
          <Feather name="edit" size={19} color="black" />
            </View>
        </View>
      )
}

export default {ChatRoomHeaderRight}

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