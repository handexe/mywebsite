// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider , getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXeGySpnq3eRL8-JzwSpgAWjhxxtSi6A0",
  authDomain: "my-blog-f57ef.firebaseapp.com",
  projectId: "my-blog-f57ef",
  storageBucket: "my-blog-f57ef.appspot.com",
  messagingSenderId: "829489722527",
  appId: "1:829489722527:web:189732ff367d99ab7e1eaa",
  measurementId: "G-V8TDXGQELQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const analytics = getAnalytics(app);