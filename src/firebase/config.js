import firebase from 'firebase'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyDwQL4ZBw6hWVugF7kcYh8PR2QfaRJqG-I",
        authDomain: "react-olx-clone-3215f.firebaseapp.com",
        projectId: "react-olx-clone-3215f",
        storageBucket: "react-olx-clone-3215f.appspot.com",
        messagingSenderId: "896758363348",
        appId: "1:896758363348:web:5dc8b1c4f5738f3c4eb741",
        measurementId: "G-LV6QWYRETN"
      };

export default firebase.initializeApp(firebaseConfig);