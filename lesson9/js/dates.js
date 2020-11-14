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

// shows announcment if Friday
day = new Date().getDay();
let announcement = document.getElementById("announcment");

if (day == 5) {
    announcement.style.display = "block";
}
else {
    announcement.style.display = "none";
}