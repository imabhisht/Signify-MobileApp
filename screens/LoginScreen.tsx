import React , {useState,useRef,useEffect } from 'react';
import {StyleSheet,Text,View, Image, TouchableOpacity,  TextInput} from 'react-native';
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons'; 
import PhoneInput from "react-native-phone-number-input";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import * as firebase from 'firebase';
import {auth} from '../firebase'
try {
  firebase.initializeApp({
    apiKey: "AIzaSyCL2DW_XMmziTfqffdtcuU9QY3F047Wedg",
  authDomain: "app-signify.firebaseapp.com",
  databaseURL: "https://app-signify-default-rtdb.firebaseio.com",
  projectId: "app-signify",
  storageBucket: "app-signify.appspot.com",
  messagingSenderId: "144281610498",
  appId: "1:144281610498:web:86943f826318d7552b7a1b",
  measurementId: "G-2Q2RNRGNWL"
  });
} catch (err) {
  // ignore app already initialized error in snack
}



function LoginScreen ({navigation}) {

  const firebaseConfigAlpha = firebase.apps.length ? firebase.app().options : undefined;
  const [verificationId, setVerificationId] = React.useState();
  const recaptchaVerifier = useRef(null);
  const [phone, setPhone] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  
  const OTPScreen = () =>{
    navigation.navigate("OTPScreen")
  }
   
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authuser) => {
      if(authuser){
        navigation.replace('MainTabNavigator', { screen: 'ChatListRoomScreen' });
      }
    });

    return unsubscribe;
    
  },[])



  return(
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfigAlpha}
        attemptInvisibleVerification={false}
      />
      <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.welcomeDetail}>{"Let get's started with Signify Authentication"}</Text>
      </View>
      <Text style={styles.emailTitle}>Phone Number</Text>
      <View style={styles.fieldsWrapper}>

      <PhoneInput ref={phoneInput}
            defaultValue={phone}
            defaultCode="IN"
            layout="second"
            
            onChangeText={(text) => {
              setPhone(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            containerStyle={{
              height: 60,
              marginTop: 20,
              borderRadius: 15,
              width:'90%',
              borderWidth: 1.5,
              borderColor:'#5e88fc',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.20,
              shadowRadius: 8.30,

              elevation: 13,
            }}
            textContainerStyle={{
              borderRadius: 25,
            }}
          />
        
      </View>

      <View style={styles.bottomButton}>
      <TouchableOpacity 
      onPress={ async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(formattedValue,recaptchaVerifier.current);
      navigation.replace("OTPScreen",{verificationId: verificationId , phoneNumber: formattedValue}); 
    } 
    catch (err) {
      alert(err.message)
    } }}>
         <View style={styles.loginWrapper}>
                <View style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Contiune</Text>
                </View>
          </View>
          </TouchableOpacity>
  
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({

  container:{
    backgroundColor: 'white',
    flex: 1,
  },
  welcomeWrapper:{
    marginTop: '20%',
    paddingHorizontal: 20
  },
  welcomeText:{
    fontSize:30,
    fontWeight: '600',
    letterSpacing:0.1,

  },
  welcomeDetail:{
    fontSize:14,
    marginTop:8,
    color: '#a2a3a7',
    letterSpacing: 0.1,
    
  },
  fieldsWrapper:{
  justifyContent: 'center', 
  alignItems: 'center' 

  },
  
  emailTitle:{
    marginTop: '20%',
    paddingHorizontal: 25,
     fontWeight: 'bold',
     fontSize: 14,
     color: '#acacb3'
  },
  bottomButton:{
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: '3%'
  },
  loginWrapper:{
    alignItems: "center",
     backgroundColor: '#5e88fc',
    paddingHorizontal: 10,
    paddingVertical: '5%',
    borderRadius: 35
  },
  loginButton:{
   
    
  },
  loginButtonText:{
    width:"100%",
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 13
  },
  signupWrapper:{
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#666666',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: '5%',
    borderRadius: 35
  },
  signupButton:{
    
    
  },
  signupText:{
    width: '100%',
    color: '#666666',
    textTransform: 'uppercase',
    fontSize: 13
  }


});