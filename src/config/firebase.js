import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBzSkMC0nMQvu8lP7nfsZtT4EGDaHfuvqM",
	authDomain: "quorara-clone.firebaseapp.com",
	projectId: "quorara-clone",
	storageBucket: "quorara-clone.appspot.com",
	messagingSenderId: "489508853857",
	appId: "1:489508853857:web:b17bd91e289f9bf52ff220",
	measurementId: "G-SB8QVJ9FBD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
