// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmYcfV07bsCGUgEYJhcN4hDWh-Gce-PaA",
  authDomain: "the-gram-clone.firebaseapp.com",
  projectId: "the-gram-clone",
  storageBucket: "the-gram-clone.appspot.com",
  messagingSenderId: "942209152353",
  appId: "1:942209152353:web:60f0c31ced9d58e1f2c120",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };
