const date = new Date();

// shows current year for copyright
document.querySelector("#copyright").innerHTML = `&copy; ${date.getFullYear()}`;

// displays when the site was last updated
document.querySelector("#date-updated").textContent = `Last Updated: ${document.lastModified}`;