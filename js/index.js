import {registrarUsuario, inicio_session} from './firebase.js';
import { imporHTML } from './importHTML.js';



let btn_enviar =document.getElementById("btn_enviar")
btn_enviar.addEventListener("click", () =>{

    let nombre = document.getElementById('username').value
    let password = document.getElementById('password').value
    //registrarUsuario(nombre,password)
    inicio_session(nombre, password)

})   



// main.js

document.addEventListener('DOMContentLoaded', () => {
    imporHTML('navBar', './moduloHTML/navBar.html');
});




