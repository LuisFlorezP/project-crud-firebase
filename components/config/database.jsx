import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDCw7Qr3vkhHadOudl-pnH9J69d0XenFyE",
  authDomain: "project-crud-fdb89.firebaseapp.com",
  projectId: "project-crud-fdb89",
  storageBucket: "project-crud-fdb89.appspot.com",
  messagingSenderId: "28149354129",
  appId: "1:28149354129:web:33e7b32bd5f478e8387930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
