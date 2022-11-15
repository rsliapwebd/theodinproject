import "./style.css";

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
  const jsonData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.long}&appid=c4fd4dbbe8a63984662de3192f30f560`
  );
  const data = await jsonData.json();
  console.log(data);
  renderInfo(data);
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
        <span>${((obj.main.temp - 32) * 0.55).toFixed(1)} Celsius</span>
        <span>${obj.weather[0].main} weather</span>
        <span>${obj.wind.speed} m/s</span>
      </section>
      <section class="user-location">
        <form class="form">
          <label for ="place">Enter another place</label>
          <input type="text" required>
          <button class="btn">Submit</button>
        </form>
      </section>
    </div>
  `;

  content.appendChild(div);
};
