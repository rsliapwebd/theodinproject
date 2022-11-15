import "./style.css";

// Get current geolocation
const getLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        resolve(location);
      },
      (err) => reject(err)
    );
  });
getLocation()
  .then((location) => location)
  .catch((error) => console.log(error));

// const myCoords = getLocation();
// console.log(myCoords.lat);

// Get weather data
const getWeatherData = async function (obj) {
  const jsonData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.long}&appid=c4fd4dbbe8a63984662de3192f30f560`
  );
  const data = jsonData.json();
  console.log(data);
};

getWeatherData(getLocation);
