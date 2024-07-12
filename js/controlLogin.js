import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signOut,signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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



export function inicio_session(usuario, password) {
  return signInWithEmailAndPassword(auth, usuario, password)
  
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = '../home.html'; 
      console.log('sesion iniciado')

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      let alert = document.getElementById('alertLogin')
      alert.style.display = 'block'
      alert.innerHTML = "Credenciales incorrectas, favor verifique sus datos"
    });

}

onAuthStateChanged(auth, (user) => {
  if (user) {
      window.location.href = '../home.html';   
  }
  else {
    console.log('sesion no iniciada') 
  }
})
