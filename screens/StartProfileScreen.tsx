import React, {useState,useEffect} from 'react';
import {
  Alert,
  Platform,
  Image,
  Keyboard,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as firebase from 'firebase';



function StartProfileScreen({navigation}) {

  const [name,setName] = useState("");
  const [image, setImage] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [avatarChange,setAvatarChange] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useEffect(()=>{
  
    const profileuser = firebase.auth().currentUser;
    if(profileuser?.displayName!=null){
      setName(profileuser?.displayName)
    }
    if(profileuser?.photoURL!=null){
      setImage(profileuser?.photoURL)
  }
    
  },[])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setAvatarChange(true)
      setImage(result.uri);
    }
  };

    if(image==null){
      setImage('https://firebasestorage.googleapis.com/v0/b/app-signify.appspot.com/o/app_data%2FdefaultAvatar%2Fuser.png?alt=media&token=fafcb84e-0e6e-497a-9ee0-ec5581515c25')
    }

    // async function uploadProfilePic(){
    //   try{
    //     const response = await fetch(image);
    //     const blob = await response.blob();
    //     console.log("UserImageChosen Link=> ",image)
    //     var ref = firebase.storage().ref().child("images/")
    //     ref.put(blob)
    //     ref.getDownloadURL()
    //     .then((url) => {
    //       console.log(url)
    //       setDownloadUrl(url)
    //     })}
    //     catch(err){
    //       alert(err)
    //     }
    // }

    const submitCreds = async () => {
      try {
      const user = await firebase.auth().currentUser;

      if(avatarChange){
      const response = await fetch(image);
      const blob = await response.blob();
      const filename = image.substring(image.lastIndexOf('/')+1)
      
      console.log("User ===> ",user)
      var ref = await firebase.storage().ref().child("userData/"+user?.uid+"/"+filename)
      await ref.put(blob)
      await ref.getDownloadURL()
      .then(async (url) => {
       console.log("UserName & User DP Lik=> \n", name,"\n",url )
         await user?.updateProfile({
           photoURL: url
         })
         console.log("newlink => ", user?.photoURL)
      })
      } 
        await user?.updateProfile({
          displayName: name
        })

        navigation.replace('MainTabNavigator', { screen: 'ChatRoom' });
    }catch (error) {
        console.log("error coming from here")
        console.log(error)
      }

      
    }

  return (
    <View style={styles.container}>
      <View style={styles.boxWrapper}>
        <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Your Signify Profile</Text>
        </View>

        <View style={styles.section}>
        <View style={styles.avatarSection}>
        <TouchableOpacity onPress={pickImage}>  
              <View style={styles.avadiv}>
              <Image source={{ uri: image }} style={styles.img}/>
              </View>
          </TouchableOpacity>
          <Text style={styles.avatarHeading}>Remove Picture</Text>
          </View>
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Nickname</Text>
          <View style={styles.inputWrapper}>
            <TextInput
            textContentType={"name"}
            style={styles.inputBox} 
            value={name}
            onChangeText={
              (nametext) => { setName(nametext); }
            } 
            placeholder={"What should we call you?"}
            />
            <Text style={styles.inputMessage}>{"Your name will remain visible to other on Signify. You can hide this & can control other Privacy from Setting -> Privacy"}</Text>
          </View>
        </View>

          <View style={styles.bottomWrapper}>
              <TouchableOpacity onPress={submitCreds}>
                <View style={styles.saveButton}>
                  <Text>Save</Text>
                </View>
              </TouchableOpacity>
          </View>
      

      </View>
    </View>
  );
}

export default StartProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  boxWrapper: {
    paddingHorizontal: 12,
    flexDirection: 'column',
  },
  headingWrapper:{
    marginTop: '20%',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '5%'
  },
  headingText:{
    fontSize: 26,
    letterSpacing: 0.3
  },
  avatarSection:{
    marginTop: '6%',
    alignItems: 'center',
    marginBottom: '5%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 15.30,

    elevation: 13,
  },
  avatarHeading:{
    marginTop:20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b7b6be',
    textDecorationLine: 'underline'

  },
  avadiv:{
    borderWidth: 3,
    borderRadius: 80,
    borderColor:'#5e88fc',
  },
  img:{ 
    width: 140, 
    height: 140,
    borderRadius: 80,
    resizeMode:'cover',
    
    
    
  },
  section: {
    flexDirection: 'column',
    marginTop: 10
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b7b6be',
  },
  inputWrapper:{
    marginTop:2
  },
  inputBox: {
    borderWidth: 1.8,
    marginTop: 7,
    borderColor: '#efeff1',
    width: '100%',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 11,
    fontSize: 14
    
  },
  inputMessage:{
    color: '#9e9ea7',
    marginTop: 3,
    textAlign: "center",
    paddingHorizontal: 15,
    fontSize:12
  },
  bottomWrapper:{
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 50,  
    alignItems: "center" 
  },
  saveButton:{
    paddingHorizontal: '35%',
    paddingVertical: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  }
});
