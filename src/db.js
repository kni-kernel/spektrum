import Firebase from "firebase/app";
import "firebase/database";
const firebaseApp = Firebase.initializeApp({
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DB,
  projectId: process.env.VUE_APP_ID,
  storageBucket: process.env.VUE_APP_STORAGE,
  messagingSenderId: process.env.VUE_APP_MSG
});
const db = firebaseApp.database();
export default db;
