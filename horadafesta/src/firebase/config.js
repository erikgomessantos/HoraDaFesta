import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMd_KMq4O4ql2d4kEofTDe5s7OBj905R0",
  authDomain: "horadafesta-91b0a.firebaseapp.com",
  projectId: "horadafesta-91b0a",
  storageBucket: "horadafesta-91b0a.appspot.com",
  messagingSenderId: "287355522076",
  appId: "1:287355522076:web:bb2b95014025c44c64a3d9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };