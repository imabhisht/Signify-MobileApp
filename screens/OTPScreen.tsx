import React , {useRef,useState,useEffect} from 'react';
import {Keyboard,View,Text,TextInput,SafeAreaView,StyleSheet, TouchableOpacity} from 'react-native';
import {auth} from '../firebase';
import {Svg,Path} from 'react-native-svg';



function OTPScreen({navigation, route})  {

  const nameref1 = useRef()
  const [pin,setPin] = useState("");
  const {verificationId , phoneNumber} = route.params;



  const clearOTP = () => {
    setPin("");
    nameref1.current.focus()
  }

  

  return(
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.headerTitle}>Signify Authentication</Text>
      </View>
      <View>
        <View style={styles.svgWrapper}>
            <Svg viewBox="0 0 1440 320">
              <Path fill="#5566ee" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,176C384,149,480,75,576,90.7C672,107,768,213,864,218.7C960,224,1056,128,1152,106.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </Svg>
        </View>
      </View>
       <View style={styles.content}>
           <Text style={styles.title}>Confirmation</Text>
           <Text style={styles.subTitle}>
            {"Enter the Verification code sent to "}{phoneNumber}{" via SMS."}
           </Text>
           
           <View style={styles.otpWrapper}>
              <TextInput 
              style={styles.inputStyle}
              value={pin}
              onChangeText={(t) => {
                 setPin(t)
                 if(t.length === 6){
                   Keyboard.dismiss();
                 }
                 }}
              keyboardType={"numeric"}
              maxLength={6}
              />
           </View>


           <View style={styles.buttonWrapper}>
           <TouchableOpacity onPress={clearOTP}>
                <Text style={styles.buttonClear}>Clear code</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[styles.buttonResend]}>Resend Code</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.buttonVerifyWrapper}>
              <TouchableOpacity style={styles.buttonVerify} 
              onPress= {async () => {                      
            try {
              const credential = auth.PhoneAuthProvider.credential(verificationId,pin);
              await auth().signInWithCredential(credential)
              // const currentUser = auth().currentUser
              // console.log(currentUser)
              
              navigation.replace("StartProfileScreen")
            } catch (err) {
              alert(err.message)
            }
          }}
              >
                <Text style={styles.textButtonVerify}>Verify</Text>
              </TouchableOpacity>
            </View>
            
        </View>
    </View>

    
  );

}

export default OTPScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1
  },
  titleWrapper:{
      height: '3%',
      backgroundColor: 'white',
      alignItems:'center',
      marginTop: '17%'
              
         
  },
  headerTitle:{
      color: 'black',
      fontSize: 27,
      letterSpacing: 0.3,
      fontWeight: '600'
  },
  svgWrapper:{
    height: 100
  },
  content:{
    backgroundColor: '#5566ee',
    flex: 1,
    marginTop: -10,
    paddingHorizontal: 40, 
    paddingTop: 20
  },
  title:{
    textAlign: "center",
    textTransform:'uppercase',
    color:'white',
    fontWeight: 'bold',
    fontSize: 24 ,
    marginTop: '1%'

  },
  subTitle:{
    color: '#a2b2fd',
    textAlign:'center',
    paddingVertical: 20,
    fontSize: 15,
    fontWeight: '600',
  },
  otpWrapper:{
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'center',
    //backgroundColor: 'black'
  },
  inputStyle:{
    paddingVertical: 10,
    textAlign: "center",
    justifyContent:'center',
    width: '80%',
    fontSize: 35,
    color: 'white',
    fontWeight: "bold",
    borderWidth: 1.5,
    borderColor: '#8a9af8',
    borderRadius: 30,
    letterSpacing: 10
  },
  buttonWrapper:{
    flexDirection: 'row',
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  buttonResend:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8a9af8',
    textTransform:'uppercase',
  },
  buttonClear:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8a9af8',
    textTransform:'uppercase'
  },
  buttonVerifyWrapper:{
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonVerify:{
    backgroundColor: '#7788ef',
    paddingHorizontal:20,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10
  },
  textButtonVerify:{
    fontSize: 19,
    color: 'white',
    fontWeight:'bold',
    textTransform: "uppercase"
  },
});