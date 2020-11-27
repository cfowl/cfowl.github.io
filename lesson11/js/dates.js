let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

let date = new Date();

// shows current date
document.getElementById("currentDate").textContent = "Today is " + date.toLocaleDateString("en-GB", options);

// shows current year for copyright
document.getElementById("currentYear").innerHTML = "&copy; " + date.getFullYear() + " Weather Fortune";

// determines when to show/hide the town announcements
let day = date.getDay();
let announcment = document.getElementById("announcment");
let town = document.getElementById("city-id").textContent;

// shows Preston announcment if Friday
if (day == 5 && town.includes("Preston")) {
    announcment.style.display = "block";
}
// shows Soda Springs announcment if Sunday
else if (day == 0 && town.includes("Soda Springs")) {
    announcment.style.display = "block";
}
// shows Fish Haven announcment if Tuesday
else if (day == 2 && town.includes("Fish Haven")) {
    announcment.style.display = "block";
}
else {
    announcment.style.display = "none";
}