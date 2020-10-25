let t = parseFloat(document.getElementById('summary-tempF').textContent);
let s = parseFloat(document.getElementById('summary-windspeed').textContent);
let windchill;

if (t > 50 || s < 3) {
    windchill = "N/A";
}
else {
    windchill = Math.round( (35.74) + (0.6215 * t) - (35.75 * (s**0.16) ) + (0.4275 * t * (s**0.16) ) ) + "&deg; F";
}

document.getElementById('summary-chillF').innerHTML = windchill;