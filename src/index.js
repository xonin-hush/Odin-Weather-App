//linking modules to this main module
var location = "mosul";
var tempUnit = "C";
var currentLocation = "";
var currentTemp = "";
const search = document.getElementById("search");
var myWeather = "";
function handleSearch() {
  search.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form

    location = document.getElementById("location");
    if (location.value != "") {
      location = location.value;
      fetchWeather();
    }
  });
}
handleSearch();

async function fetchWeather() {
  var loading = document.querySelector("#loading");
  loading.textContent = "loading";
  myWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5445bedc62eb468ca61125705240406&q=${location}`,
    { mode: "cors" }
  );
  myWeather = await myWeather.json();

  loading.innerHTML = "";
  await displayInfo(myWeather);
  await giphy();
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
    currentTemp = temperature.textContent;
    feelsLike.textContent = myWeather.current.feelslike_c;
  } else {
    temperature.textContent = myWeather.current.temp_f;
    feelsLike.textContent = myWeather.current.feelslike_f;
  }
  pressure.textContent = `${myWeather.current.pressure_mb} mb`;
  humidity.textContent = `${myWeather.current.humidity}%`;
}

function changeUnit() {
  window.addEventListener("click", (e) => {
    event.preventDefault();
    if (e.target.innerHTML == "°C / °F" && myWeather != "") {
      if (tempUnit == "C") {
        tempUnit = "F";
        displayInfo(myWeather);
      } else {
        tempUnit = "C";
        displayInfo(myWeather);
      }
    }
  });
}
changeUnit();

function giphy() {
  //bad code
  const img = document.querySelector("img");
  if (currentLocation == "") {
    console.log("working");
    img.src =
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzlpODRwZTVub3U3NzcxZTEwNm1nZDhrZmtnc2RvaDdscmQ0ZXU0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13Z5kstwARnPna/giphy.gif";
  }
  if (currentTemp >= 30) {
    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=SM0ohecjoxyN7SEyVlnl79p7m05hlqOm&s=hotweather",
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
      });
  }
  if (currentTemp >= 16) {
    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=SM0ohecjoxyN7SEyVlnl79p7m05hlqOm&s=niceweather",
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
      });
  }
  if (currentTemp < 16) {
    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=SM0ohecjoxyN7SEyVlnl79p7m05hlqOm&s=coldweather",
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
      });
  }
}
