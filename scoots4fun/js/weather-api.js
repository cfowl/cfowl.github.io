// Lat,Lon for Cozumel, MX is [20.5083, -86.9458]
const city = "lat=20.5083&lon=-86.9458";

// ** CURRENT WEATHER DATA & 3-DAY FORECAST & WEATHER ALERTS ** //
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?${city}&units=imperial&appid=8cc890828b10d4b67c888df88fd63a40`;

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    // weather alerts
    const alerts = jsObject.alerts;
    if (alerts) {
      document.getElementsByClassName("alerts")[0].classList.toggle("alerts-show");
      alerts.forEach(x => {
        const alert = `**WEATHER ALERT: ${x.event}`;
        const start = `**STARTING: ${new Date(x.start * 1000).toDateString()}`;
        const end = `**ENDING: ${new Date(x.end * 1000).toDateString()}`;

        document.querySelector(".alerts").innerHTML = `<span>${alert}</span> <span>${start}</span> <span>${end}</span>`
      })
    };

    // current weather
    const temperature = jsObject.current.temp;
    const description = jsObject.current.weather[0].description;
    const humidity = jsObject.current.humidity;
    document.querySelector("#description").textContent = `Description: ${description}`;
    document.querySelector("#temperature").innerHTML = `Currently: ${temperature}&deg; F`;
    document.querySelector("#humidity").textContent = `Humidity: ${humidity}%`;

    // weather forecast
    const forecast = jsObject.daily.slice(1,4);
    forecast.forEach(x => {
      const date = new Date(x.dt * 1000);
      const day = `${date.toString().substr(0,3)} (${date.getMonth()+1}/${date.getDate()})`;
      const forecastTemp = x.temp.day;
      const iconSrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
      const iconAlt = `${x.weather[0].description} icon`;
      let card = document.createElement("div");
      let h3 = document.createElement("h3");
      let icon = document.createElement("img");
      let p = document.createElement("p");
      h3.textContent = day;
      icon.setAttribute("src", iconSrc);
      icon.setAttribute("alt", iconAlt);
      p.innerHTML = `${forecastTemp}&deg; F`;
      card.appendChild(h3);
      card.appendChild(icon);
      card.appendChild(p);
      document.querySelector(".forecast").appendChild(card);
    });
  });