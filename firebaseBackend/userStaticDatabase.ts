import {auth,db} from '../firebase'


console.log("Detail Logsdsdsging")

function UpdateUserInfo () {
    console.log("Detail Logging")
    const currentUser = auth().currentUser;
    const userData = {
        uid :  currentUser?.uid,
        avatar: currentUser?.photoURL,
        nickname: currentUser?.displayName,
        phone: currentUser?.phoneNumber
    
    }
    console.log("Detail Logging")
    db.collection('userData').doc(currentUser?.phoneNumber).set(userData,{merge: true});
    
}

export {UpdateUserInfo}