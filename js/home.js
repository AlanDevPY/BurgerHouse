import {signOutUser } from './firebase.js';

let cerrar_session = document.getElementById('cerrar_session');
cerrar_session.addEventListener('click', () => {
    signOutUser();
    console.log('sesion cerrada')
})

