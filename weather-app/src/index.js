import "./style.css";

// Images
import clouds from "./img/clouds.jpg";
import clear from "./img/clear.jpg";
import snow from "./img/snow.jpg";
import rain from "./img/rain.jpg";
import mist from "./img/mist.jpg";

const content = document.querySelector("#content");

// Get current geolocation and do stuff
const getLocation = (function () {
  navigator.geolocation.getCurrentPosition(function (pos) {
    const coords = {
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    };
    getWeatherData(coords);
  });
})();

// Get weather data
const getWeatherData = async function (obj) {
  try {
    const jsonData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.long}&appid=c4fd4dbbe8a63984662de3192f30f560`
    );
    const data = await jsonData.json();
    console.log(data);
    renderInfo(data);
  } catch (err) {
    alert("Somethimg went wrong :(");
  }
};

// Render weather info
const renderInfo = function (obj) {
  const div = document.createElement("div");
  div.classList.add("container");
  div.innerHTML = `
    <div class="title-container">
      <h2 class="title-left">Hi, you are currently</h2>
      <h2 class="title-right">in ${obj.name}, ${obj.sys.country}</h2>
    </div>
    <div class="inner-container">
      <section class="weather-summary">
        <span>${(obj.main.temp - 273.15).toFixed(1)} Celsius degree</span>
        <span>Currently: ${obj.weather[0].main}</span>
        <span>Wind is ${obj.wind.speed} m/s</span>
      </section>
      <section class="user-location">
        <form class="form">
          <label for ="place">Try another place</label>
          <input type="text" required>
          <button class="btn">Submit</button>
        </form>
      </section>
    </div>
  `;
  clearContent();
  content.appendChild(div);

  getConditions(obj);

  const btn = document.querySelector(".btn");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    getUserLocation();
  });
};

// Get background piture for weather
const getConditions = function (obj) {
  const weather = obj.weather[0].main;
  let condition;

  switch (weather) {
    case "Clouds":
      condition = clouds;
      break;
    case "Clear":
      condition = clear;
      break;
    case "Snow":
      condition = snow;
      break;
    case "Rain":
      condition = rain;
      break;
    default:
      condition = mist;
      break;
  }

  const body = document.querySelector("body");
  body.style.background = `url(${condition}) no-repeat center center/cover`;
};

// Get user input and find location
const getUserLocation = async function () {
  try {
    const input = document.querySelector("input");
    const findCityJSON = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c4fd4dbbe8a63984662de3192f30f560`
    );
    const city = await findCityJSON.json();
    console.log(city);
    renderInfo(city);
  } catch (err) {
    alert("Something went wrong :(");
  }
};

// Clear content
const clearContent = function () {
  content.innerHTML = "";
};
