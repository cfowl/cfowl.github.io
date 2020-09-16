let options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

// shows current date
document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-US", options);

// shows when document was last modified
document.getElementById("lastUpdated").textContent = document.lastModified;

// shows current year for copyright
document.getElementById("currentYear").textContent = new Date().getFullYear();