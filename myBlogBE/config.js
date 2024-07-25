const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("./assets/myblog-448a2-c5f839bf853d.json");
const firebaseConfig = require("./assets/Secret.js");

const firebase = initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://cyberstoremanagement-4b1bf.appspot.com",
});
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");
const db = getFirestore();
module.exports = { firebase, db };
