/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLFNBQVM7QUFDakcsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRCw0QkFBNEIsMkJBQTJCO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9saW5raW5nIG1vZHVsZXMgdG8gdGhpcyBtYWluIG1vZHVsZVxudmFyIGxvY2F0aW9uID0gXCJtb3N1bFwiO1xudmFyIHRlbXBVbml0ID0gXCJDXCI7XG52YXIgY3VycmVudExvY2F0aW9uID0gXCJcIjtcbnZhciBjdXJyZW50VGVtcCA9IFwiXCI7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbnZhciBteVdlYXRoZXIgPSBcIlwiO1xuZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFdlIGRvbid0IHdhbnQgdG8gc3VibWl0IHRoaXMgZmFrZSBmb3JtXG5cbiAgICBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG4gICAgaWYgKGxvY2F0aW9uLnZhbHVlICE9IFwiXCIpIHtcbiAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24udmFsdWU7XG4gICAgICBmZXRjaFdlYXRoZXIoKTtcbiAgICB9XG4gIH0pO1xufVxuaGFuZGxlU2VhcmNoKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcigpIHtcbiAgdmFyIGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIik7XG4gIGxvYWRpbmcudGV4dENvbnRlbnQgPSBcImxvYWRpbmdcIjtcbiAgbXlXZWF0aGVyID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NTQ0NWJlZGM2MmViNDY4Y2E2MTEyNTcwNTI0MDQwNiZxPSR7bG9jYXRpb259YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbXlXZWF0aGVyID0gYXdhaXQgbXlXZWF0aGVyLmpzb24oKTtcblxuICBsb2FkaW5nLmlubmVySFRNTCA9IFwiXCI7XG4gIGF3YWl0IGRpc3BsYXlJbmZvKG15V2VhdGhlcik7XG4gIGF3YWl0IGdpcGh5KCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbmZvKG15V2VhdGhlcikge1xuICB2YXIgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50LWxvY2F0aW9uXCIpO1xuICB2YXIgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gIHZhciBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzLWxpa2VcIik7XG4gIHZhciBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlc3N1cmVcIik7XG4gIHZhciBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlcIik7XG4gIGN1cnJlbnRMb2NhdGlvbi50ZXh0Q29udGVudCA9IG15V2VhdGhlci5sb2NhdGlvbi5uYW1lO1xuXG4gIGlmICh0ZW1wVW5pdCA9PT0gXCJDXCIpIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LnRlbXBfYztcbiAgICBjdXJyZW50VGVtcCA9IHRlbXBlcmF0dXJlLnRleHRDb250ZW50O1xuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICB9IGVsc2Uge1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gbXlXZWF0aGVyLmN1cnJlbnQudGVtcF9mO1xuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9mO1xuICB9XG4gIHByZXNzdXJlLnRleHRDb250ZW50ID0gYCR7bXlXZWF0aGVyLmN1cnJlbnQucHJlc3N1cmVfbWJ9IG1iYDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtteVdlYXRoZXIuY3VycmVudC5odW1pZGl0eX0lYDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVW5pdCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PSBcIsKwQyAvIMKwRlwiICYmIG15V2VhdGhlciAhPSBcIlwiKSB7XG4gICAgICBpZiAodGVtcFVuaXQgPT0gXCJDXCIpIHtcbiAgICAgICAgdGVtcFVuaXQgPSBcIkZcIjtcbiAgICAgICAgZGlzcGxheUluZm8obXlXZWF0aGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBVbml0ID0gXCJDXCI7XG4gICAgICAgIGRpc3BsYXlJbmZvKG15V2VhdGhlcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmNoYW5nZVVuaXQoKTtcblxuZnVuY3Rpb24gZ2lwaHkoKSB7XG4gIC8vYmFkIGNvZGVcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgaWYgKGN1cnJlbnRMb2NhdGlvbiA9PSBcIlwiKSB7XG4gICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpO1xuICAgIGltZy5zcmMgPVxuICAgICAgXCJodHRwczovL21lZGlhNC5naXBoeS5jb20vbWVkaWEvdjEuWTJsa1BUYzVNR0kzTmpFeE56bHBPRFJ3WlRWdWIzVTNOemN4WlRFd05tMW5aRGhyWm10bmMyUnZhRGRzY21RMFpYVTBkaVpsY0QxMk1WOXBiblJsY201aGJGOW5hV1pmWW5sZmFXUW1ZM1E5WncvMTNaNWtzdHdBUm5QbmEvZ2lwaHkuZ2lmXCI7XG4gIH1cbiAgaWYgKGN1cnJlbnRUZW1wID49IDMwKSB7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PVNNMG9oZWNqb3h5TjdTRXlWbG5sNzlwN20wNWhscU9tJnM9aG90d2VhdGhlclwiLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaW1nLnNyYyA9IHJlc3BvbnNlLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICAgIH0pO1xuICB9XG4gIGlmIChjdXJyZW50VGVtcCA+PSAxNikge1xuICAgIGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1TTTBvaGVjam94eU43U0V5VmxubDc5cDdtMDVobHFPbSZzPW5pY2V3ZWF0aGVyXCIsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpbWcuc3JjID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICAgICAgfSk7XG4gIH1cbiAgaWYgKGN1cnJlbnRUZW1wIDwgMTYpIHtcbiAgICBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9U00wb2hlY2pveHlON1NFeVZsbmw3OXA3bTA1aGxxT20mcz1jb2xkd2VhdGhlclwiLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaW1nLnNyYyA9IHJlc3BvbnNlLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=