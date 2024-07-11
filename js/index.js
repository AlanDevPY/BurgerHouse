import { registrarUsuario, inicio_session } from './firebase.js';
import { imporHTML } from './importHTML.js';

document.addEventListener('DOMContentLoaded', () => {
    imporHTML('navBar', './moduloHTML/navBar.html');
    imporHTML('footer', './moduloHTML/footer.html');
    imporHTML('login', './moduloHTML/login.html', () => {
        let btn_enviar = document.getElementById('btn_enviar');
        btn_enviar.addEventListener('click', () => {
            let nombre = document.getElementById('username').value;
            let password = document.getElementById('password').value;

            // registrarUsuario(nombre, password)
            inicio_session(nombre, password);
        });
    });
});
