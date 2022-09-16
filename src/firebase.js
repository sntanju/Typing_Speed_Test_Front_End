import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBot3JKmpzPhhvCay6h4bLKgWyqAw88g5c",
  authDomain: "typing-speed-test-f5a92.firebaseapp.com",
  projectId: "typing-speed-test-f5a92",
  storageBucket: "typing-speed-test-f5a92.appspot.com",
  messagingSenderId: "1020388959291",
  appId: "1:1020388959291:web:4c9d92794079e4c11ae81e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };