
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvqUugnYg2Uwgethw2gc-w8m0hTe4wahg",
  authDomain: "tienda-coderhouse-86b10.firebaseapp.com",
  projectId: "tienda-coderhouse-86b10",
  storageBucket: "tienda-coderhouse-86b10.appspot.com",
  messagingSenderId: "608934972532",
  appId: "1:608934972532:web:042b1715b6b114b8b91521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);