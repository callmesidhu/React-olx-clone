import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBveMu4JwB0JFC4biNUGgNRHvcbFNsS80M",
  authDomain: "react-olx-clone-c66b1.firebaseapp.com",
  projectId: "react-olx-clone-c66b1",
  storageBucket: "react-olx-clone-c66b1.appspot.com",
  messagingSenderId: "827654866250",
  appId: "1:827654866250:web:5ae02792ee8e945db02db3",
  measurementId: "G-1FDBWNV39S"
};

export default firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();


