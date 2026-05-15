
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyB7GdPAMn-rB6vhCYoc5xEB0QyhUTYt34k",
  authDomain: "yugioh-a8dc4.firebaseapp.com",
  projectId: "yugioh-a8dc4",
  storageBucket: "yugioh-a8dc4.firebasestorage.app",
  messagingSenderId: "1012207986109",
  appId: "1:1012207986109:web:9c641a9b9aacda62359ed4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };