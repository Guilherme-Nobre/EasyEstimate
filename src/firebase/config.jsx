import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBGn69aNUyr0Lb4LZ13zuUT1llRkdtkRWs",
  authDomain: "iramilton-13bc8.firebaseapp.com",
  projectId: "iramilton-13bc8",
  storageBucket: "iramilton-13bc8.appspot.com",
  messagingSenderId: "251771374424",
  appId: "1:251771374424:web:b760fc4a211bb731fbb32d",
  measurementId: "G-C6NQ4352G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };