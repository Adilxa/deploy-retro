import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyCy0hp9bc8IJdrV_lHvk_65TMl-nKrtLXM",
  authDomain: "deploysiteretro.firebaseapp.com",
  projectId: "deploysiteretro",
  storageBucket: "deploysiteretro.appspot.com",
  messagingSenderId: "743722255960",
  appId: "1:743722255960:web:f2b338f3e2fe1753866c2d",
  measurementId: "G-Q6Z9KDMPT1"
});
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();

export default firebase;
