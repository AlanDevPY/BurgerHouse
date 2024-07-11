// navbar.js
export function imporHTML(containerId, navbarPath) {
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}
