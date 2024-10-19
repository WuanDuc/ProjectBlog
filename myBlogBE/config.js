const { initializeApp } = require("firebase/app");
const { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendEmailVerification, 
  sendPasswordResetEmail,
} = require("firebase/auth") ;

const admin = require("firebase-admin");
const serviceAccount = require("./assets/myblog-448a2-c5f839bf853d.json");
const firebaseConfig = {
  apiKey: "AIzaSyAdd0plRHTc1VDqEOAHKXSkn5-KiW4WicU",
  authDomain: "myblog-448a2.firebaseapp.com",
  databaseURL: "https://myblog-448a2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myblog-448a2",
  storageBucket: "myblog-448a2.appspot.com",
  messagingSenderId: "736604021337",
  appId: "1:736604021337:web:7e2c142d228c56c158c748",
  measurementId: "G-ZLHSS9BQFJ"
};
const firebase = initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");
const db = getFirestore();
module.exports = { firebase, db ,auth: getAuth(firebase),
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail, admin};
