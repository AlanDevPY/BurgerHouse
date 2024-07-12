import {inicio_session } from './controlLogin.js';

let btn_enviar = document.getElementById('btn_enviar');
btn_enviar.addEventListener('click', () => {
    let nombre = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // registrarUsuario(nombre, password)
    console.log('login');
    inicio_session(nombre, password);
    
});
