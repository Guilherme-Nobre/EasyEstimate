import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDth1KGvhZcAt3X061M6aT_CNEskWi6-xw",
  authDomain: "easyestimate-ff7f0.firebaseapp.com",
  projectId: "easyestimate-ff7f0",
  storageBucket: "easyestimate-ff7f0.appspot.com",
  messagingSenderId: "516998271746",
  appId: "1:516998271746:web:71e0e249c64dcd1db6281b",
  measurementId: "G-H5P9ECVHW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };