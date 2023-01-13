import firebase from "firebase"

//
const firebaseConfig = {
    apiKey: "AIzaSyAISDZtNHBIOWK4xEmiS8Ql2J3WqvDfOyY",   //connect localapp to internet server
    authDomain: "auth-devlopment-b0924.firebaseapp.com",  //stroe all activeityies
    projectId: "auth-devlopment-b0924",
    storageBucket: "auth-devlopment-b0924.appspot.com",
    messagingSenderId: "1020016043942",
    appId: "1:1020016043942:web:60525168e78c7063e55167"
  };

//below line connects the evertying
  const firebaseApp = firebase.initializeApp(firebaseConfig)

//access the firestore db

 const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db,auth} ;
 

  

  