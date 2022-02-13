import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDMn3wup3gG5otWd6-awuUazFMxLfTl3No",
    authDomain: "react-firebase-27cdb.firebaseapp.com",
    databaseURL: 'https://react-firebase-27cdb.firebaseio.com',
    projectId: "react-firebase-27cdb",
    storageBucket: "react-firebase-27cdb.appspot.com",
    messagingSenderId: "262694753495",
    appId: "1:262694753495:web:a69d8e2a055c0ad2970c92"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, firebase, db, storage}
