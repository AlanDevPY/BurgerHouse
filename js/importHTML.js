// navbar.js
// importHTML.js
export function imporHTML(containerId, filePath, callback) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error('Error loading HTML:', error));
}
