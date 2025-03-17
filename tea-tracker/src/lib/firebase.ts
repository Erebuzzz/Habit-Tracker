import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXbxeHV1YEN-MILvv3SPdwByg-iuCnymM",
  authDomain: "tea-tracker15.firebaseapp.com",
  projectId: "tea-tracker15",
  storageBucket: "tea-tracker15.appspot.com",
  messagingSenderId: "838355016413",
  appId: "1:838355016413:web:d518c2b2de8f1e07dd1934",
  measurementId: "G-JZ88P2REJ3",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const messaging = getMessaging(app);

// Notification Permission Request
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BElo-52wh8axH6yKC4HBFnocjlYlBWIDgfwTJ-nRh9ufJ94XvJXTQ5MsumVxDZP372aH4RwTOLH3kR19I1mPQE0",
      });
      console.log("FCM Token:", token);
      return token;
    }
  } catch (error) {
    console.error("Error getting FCM token", error);
  }
};

// Listen for Incoming Messages
onMessage(messaging, (payload) => {
  console.log("Message received:", payload);
});

// Export Variables (Single Declaration)
export { app, auth, provider, db, messaging };