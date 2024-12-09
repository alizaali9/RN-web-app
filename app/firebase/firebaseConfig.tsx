import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCizSb5SC-NMZGOH9MYEWiAa6Cf6KGdHSc",
  authDomain: "crud-de719.firebaseapp.com",
  projectId: "crud-de719",
  storageBucket: "crud-de719.appspot.com",
  messagingSenderId: "81484338988",
  appId: "1:81484338988:web:e74f09cd428c5687a23e89",
  measurementId: "G-Q17XF9M7PJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Default export for convenience
export default { auth, db };
