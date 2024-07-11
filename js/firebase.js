// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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

export function inicio_session(usuario, password) {
  return signInWithEmailAndPassword(auth, usuario, password)

    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('sesion iniciado')

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });

}
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('usuario iniciado')
  }
  else {
    console.log('sesion no iniciada')
  }
})
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    //console.log('la sesion esta siendo iniciada')
  }).catch((error) => {
    console.log(error)
  })