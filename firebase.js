// Import the functions you need from the SDKs you need

import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwZ_D_j-k2CMae1f_k8RNzh7MbpoRLYpA",
  authDomain: "dunkin-den.firebaseapp.com",
  projectId: "dunkin-den",
  storageBucket: "dunkin-den.appspot.com",
  messagingSenderId: "1090093455080",
  appId: "1:1090093455080:web:7c7e1719b5fb2db38d1b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};