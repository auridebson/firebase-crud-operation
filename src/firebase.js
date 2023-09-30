import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyA8MUj1grCwE-m-xo64V4GhXc5M_TvI2jo",
    authDomain: "vutus-ca60e.firebaseapp.com",
    databaseURL: "https://vutus-ca60e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vutus-ca60e",
    storageBucket: "vutus-ca60e.appspot.com",
    messagingSenderId: "679933469890",
    appId: "1:679933469890:web:2b062deb4e2789344b875b",
    measurementId: "G-L9BKKMEVBK"
  };

  const DB = firebase.initializeApp(firebaseConfig)
  export default DB.database().ref()