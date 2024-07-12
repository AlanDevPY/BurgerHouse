// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence, signOut  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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
const auth = getAuth(app);
const db = getFirestore(app); // Recommended to pass `app`


onAuthStateChanged(auth, (user) => {
  if (user) {
      // window.location.href = '../home.html'; 
  }
  else {
    console.log('sesion no iniciada') 
    window.location.href = '../index.html'; 
  }
})


setPersistence(auth, browserSessionPersistence)
  .then(() => {
    
  }).catch((error) => {
    console.log(error)  
  })

  export const signOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      window.location.href = '../index.html'; 
    }).catch((error) => {
      // An error happened.
      console.error("An error happened during sign-out:", error);
    });
  };
