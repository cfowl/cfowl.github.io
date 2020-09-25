let options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

// shows when document was last modified
document.getElementById("lastUpdated").textContent = "Last Updated: " + document.lastModified;

// shows current year for copyright
document.getElementById("copyrightYear").innerHTML = "&copy; " + new Date().getFullYear();