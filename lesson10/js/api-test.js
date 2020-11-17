// //

const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=8cc890828b10d4b67c888df88fd63a40";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // delete console.log above ; only for testing purposes
    const iconSrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const iconAlt = jsObject.weather[0].description;

    document.getElementById("current-temp").textContent = jsObject.main.temp;
    let iconPath = document.getElementById("imagesrc").textContent = iconSrc;

    let icon = document.getElementById("icon");
    icon.setAttribute("alt", iconAlt);
    icon.setAttribute("src", iconSrc);
  });