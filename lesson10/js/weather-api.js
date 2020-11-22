// ** CURRENT WEATHER DATA ** //
// city ID for preston is 5604473

const preston = "5604473";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${preston}&units=imperial&appid=8cc890828b10d4b67c888df88fd63a40`;

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {

    const currenttemp = jsObject.main.temp.toFixed(1);
    const windspeed = jsObject.wind.speed.toFixed(1);

    // sets windchill
    let windchill;
    if (currenttemp > 50 || windspeed < 3) {
      windchill = "N/A";
    }
    else {
      windchill = get_windchill(currenttemp, windspeed);
    }

    document.getElementById("description").textContent = jsObject.weather[0].description;
    document.getElementById("currenttemp").textContent = currenttemp;
    document.getElementById("windchill").innerHTML = windchill;
    document.getElementById("humidity").textContent = jsObject.main.humidity;
    document.getElementById("windspeed").textContent = windspeed;

  });

// ** 5-DAY FORECAST DATA ** //
// city ID for preston is 5604473
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${preston}&units=imperial&appid=8cc890828b10d4b67c888df88fd63a40`;

fetch(forecastURL)
  .then(response => response.json())
  .then(jsForecast => {
      // gets only the forecasts for 18:00:00
      const forecast = jsForecast.list.filter(i => i.dt_txt.includes("18:00:00"));

      let num = 1;
      forecast.forEach(i => {

          // const dayOfWeek = new Date(i.dt_txt).toString().substr(0,3);
          // this didn't work on iPhone Safari - displayed "Inv", but it did work on Chrome and Firefox

          // gets day name and plugs it into html
          dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
          const n = new Date(i.dt_txt).getDay();
          const day = document.getElementById(`day${num++}`);
          day.getElementsByTagName("h4")[0].textContent = dayOfWeek[n];

          // gets icon and plugs it into html
          const icon = day.getElementsByTagName("img")[0];
          const iconSrc = `https://openweathermap.org/img/w/${i.weather[0].icon}.png`;
          icon.setAttribute("src", iconSrc);

          // gets temp at 18:00:00 and plugs it into html
          day.getElementsByTagName("span")[0].innerHTML = `${i.main.temp.toFixed(1)}&deg; F`;

      })

  });


// ** GETS WINDCHILL ** //
// input: currenttemp, windspeed
// processing & output: calculates and returns windchill
function get_windchill(t,s) {
  return ( (35.74) + (0.6215 * t) - (35.75 * (s**0.16) ) + (0.4275 * t * (s**0.16) ) ).toFixed(1) + "&deg; F";
}