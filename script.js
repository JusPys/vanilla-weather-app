function formatDate(timestamp) {
  //Calculate the current date based on datetime
  let date = new Date(timestamp);

  let hour = date.getHours();
  if (hour <= 10) {
    hour = `0${hour}`;
  }

  let minutes = date.getMinutes();
  if (minutes <= 10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return `${day} ${hour}:${minutes}`;
}

function displayWeather(response) {
  //Checking how to find the element in the API response
  //console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  date.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "34ae1065362d42545661451bda2b8a1f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather);
