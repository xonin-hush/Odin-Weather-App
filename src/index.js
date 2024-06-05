//linking modules to this main module
var location = "mosul";
var tempUnit = "C";
const search = document.getElementById("search");
var myWeather = "";
function handleSearch() {
  search.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    location = document.getElementById("location");
    location = location.value;
    fetchWeather();
  });
}
handleSearch();

async function fetchWeather() {
  console.log({ location });
  var loading = document.querySelector("#loading");
  loading.textContent = "loading";
  myWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5445bedc62eb468ca61125705240406&q=${location}`,
    { mode: "cors" }
  );
  myWeather = await myWeather.json();
  loading.innerHTML = "";
  console.log(myWeather);
  console.log(myWeather.current.temp_c);
  await displayInfo(myWeather);
}

function displayInfo(myWeather) {
  var currentLocation = document.querySelector("#current-location");
  var temperature = document.querySelector("#temp");
  var feelsLike = document.querySelector("#feels-like");
  var pressure = document.querySelector("#pressure");
  var humidity = document.querySelector("#humidity");
  currentLocation.textContent = myWeather.location.name;

  if (tempUnit === "C") {
    temperature.textContent = myWeather.current.temp_c;
    feelsLike.textContent = myWeather.current.feelslike_c;
  } else {
    temperature.textContent = myWeather.current.temp_f;
    feelsLike.textContent = myWeather.current.feelslike_f;
  }
  pressure.textContent = `${myWeather.current.pressure_mb} mb`;
  humidity.textContent = `${myWeather.current.humidity}%`;
  console.log("hello", myWeather.current.temp_c);
}

function changeUnit() {
  // // console.log(myWeather)
  // if (tempUnit === "C") {
  //   tempUnit = "F";
  //   // displayInfo(myWeather);
  // }
  // if (tempUnit === "F") {
  //   tempUnit = "C";
  //   // displayInfo(myWeather);
  // }
  console.log("helloddd")
}
