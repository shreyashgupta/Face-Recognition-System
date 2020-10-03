import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
require('firebase/database');
var firebaseConfig = {
  apiKey: "AIzaSyCGIg9Zh7emRWkEEh087LkCJjV89Cw9klI",
  authDomain: "facerec-437f1.firebaseapp.com",
  databaseURL: "https://facerec-437f1.firebaseio.com",
  projectId: "facerec-437f1",
  storageBucket: "facerec-437f1.appspot.com",
  messagingSenderId: "574142298543",
  appId: "1:574142298543:web:25893a990cb0a7bc72975a",
  measurementId: "G-VR803L2BT6"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;