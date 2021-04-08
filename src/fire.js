import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBLmrQzW_6OYrxv3qQBfuus3m_jLWNy-7g",
    authDomain: "appointment-63041.firebaseapp.com",
    projectId: "appointment-63041",
    storageBucket: "appointment-63041.appspot.com",
    messagingSenderId: "933676321376",
    appId: "1:933676321376:web:9e0c5efdc882ca13ef1105",
    measurementId: "G-V0KDB3EHC2"
  };

  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;