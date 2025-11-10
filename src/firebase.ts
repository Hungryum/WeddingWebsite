// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWsOZXPSUsYJO8ozCVFNuY0XplXgzlSt0",
    authDomain: "wedding2026-4b66d.firebaseapp.com",
    projectId: "wedding2026-4b66d",
    storageBucket: "wedding2026-4b66d.firebasestorage.app",
    messagingSenderId: "573814742113",
    appId: "1:573814742113:web:427bf29da33e2cbea79e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };