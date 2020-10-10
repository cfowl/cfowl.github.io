let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

// shows current date
document.getElementById("currentDate").textContent = "Today is " + new Date().toLocaleDateString("en-GB", options);

// shows current year for copyright
document.getElementById("currentYear").innerHTML = "&copy; " + new Date().getFullYear() + " Weather Fortune";