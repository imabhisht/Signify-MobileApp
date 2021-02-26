import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native'
import { Ionicons , FontAwesome, Feather} from '@expo/vector-icons';

export default {
  ChatRoomSkin: {
    headerTitle: 'Messages',
    headerTitleAlign: 'left',
    headerStyle:{
      height: '45%',
      //backgroundColor: 'red',
      elevation: 0,
    },
    headerRight: () => {
      return(
        <View>
          <TouchableOpacity>
            <View style={styles.ChatRoomHeaderRight}>
              <Feather name="edit" size={19} color="black" />
            </View>
            </TouchableOpacity>
        </View>
      );
    },
    headerRightContainerStyle:{
        paddingHorizontal: 35,
        marginTop: '11%'
    },
    headerTitleStyle:{
      marginTop: '25%',
      fontSize: 32,
      paddingHorizontal: '4%',
      color: '#45454f',
      letterSpacing: 0.2,
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'bold'
    }
  }
};


const styles = StyleSheet.create({
  ChatRoomHeaderRight:{
    backgroundColor: 'white', 
    padding: 7,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

