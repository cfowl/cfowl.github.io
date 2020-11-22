// city ID for preston is 5604473
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8cc890828b10d4b67c888df88fd63a40";

fetch(forecastURL)
  .then(response => response.json())
  .then(jsForecast => {
      // gets only the forecasts for 18:00:00
      const forecast = jsForecast.list.filter(i => i.dt_txt.includes("18:00:00"));

      let num = 1;
      forecast.forEach(i => {
          const dayOfWeek = new Date(i.dt_txt).toString().substr(0,3);
          const day = document.getElementById(`day${num++}`);
          day.getElementsByTagName("h4")[0].textContent = dayOfWeek;

          const icon = day.getElementsByTagName("img")[0];
          const iconSrc = `https://openweathermap.org/img/w/${i.weather[0].icon}.png`;
          icon.setAttribute("src", iconSrc);

          day.getElementsByTagName("span")[0].innerHTML = `${i.main.temp.toFixed(1)}&deg; F`;

      })

    //  const iconSrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    //  const iconAlt = jsObject.weather[0].description;
    //  const iconPath = document.getElementById("imagesrc").textContent = iconSrc;
    //  const icon = document.getElementById("icon");
    //  icon.setAttribute("alt", iconAlt);
    //  icon.setAttribute("src", iconSrc);

  });