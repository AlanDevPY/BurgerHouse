// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0op8ah3Ls_eKMG8UPEHCpgI4oi3G7ohQ",
  authDomain: "burgerhouse-2da5e.firebaseapp.com",
  projectId: "burgerhouse-2da5e",
  storageBucket: "burgerhouse-2da5e.appspot.com",
  messagingSenderId: "943316627807",
  appId: "1:943316627807:web:9f434c1c93c68c9b2746ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Recommended to pass `app`

export const registrarUsuario = (username,password ) => {
    try {
      addDoc(collection(db, "pedidos"), {
        username: username,
        password: password
      });
      console.log("Usuario Registrado");
    }
    catch (error) {
      console.error('Error al registrar el usuario', error)
    }
  }