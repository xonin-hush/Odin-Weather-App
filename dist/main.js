/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
  console.log(myWeather)
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
  window.addEventListener("click", (e) => {
    event.preventDefault();
    tempButton = document.getElementById("temp-button");
    if (e.target.innerHTML == "°C / °F") {
      if (tempUnit == "C") {
        tempUnit = "F";
        displayInfo(myWeather)
      } else {
        tempUnit = "C";
        displayInfo(myWeather)
      }
      console.log(tempUnit);
    }
  });
}
changeUnit();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLFNBQVM7QUFDakcsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0QsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9saW5raW5nIG1vZHVsZXMgdG8gdGhpcyBtYWluIG1vZHVsZVxudmFyIGxvY2F0aW9uID0gXCJtb3N1bFwiO1xudmFyIHRlbXBVbml0ID0gXCJDXCI7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbnZhciBteVdlYXRoZXIgPSBcIlwiO1xuZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFdlIGRvbid0IHdhbnQgdG8gc3VibWl0IHRoaXMgZmFrZSBmb3JtXG4gICAgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb24udmFsdWU7XG4gICAgZmV0Y2hXZWF0aGVyKCk7XG4gIH0pO1xufVxuaGFuZGxlU2VhcmNoKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcigpIHtcbiAgY29uc29sZS5sb2coeyBsb2NhdGlvbiB9KTtcbiAgdmFyIGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIik7XG4gIGxvYWRpbmcudGV4dENvbnRlbnQgPSBcImxvYWRpbmdcIjtcbiAgbXlXZWF0aGVyID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NTQ0NWJlZGM2MmViNDY4Y2E2MTEyNTcwNTI0MDQwNiZxPSR7bG9jYXRpb259YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbXlXZWF0aGVyID0gYXdhaXQgbXlXZWF0aGVyLmpzb24oKTtcbiAgbG9hZGluZy5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zb2xlLmxvZyhteVdlYXRoZXIpO1xuICBjb25zb2xlLmxvZyhteVdlYXRoZXIuY3VycmVudC50ZW1wX2MpO1xuICBhd2FpdCBkaXNwbGF5SW5mbyhteVdlYXRoZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5mbyhteVdlYXRoZXIpIHtcbiAgY29uc29sZS5sb2cobXlXZWF0aGVyKVxuICB2YXIgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50LWxvY2F0aW9uXCIpO1xuICB2YXIgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gIHZhciBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzLWxpa2VcIik7XG4gIHZhciBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlc3N1cmVcIik7XG4gIHZhciBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlcIik7XG4gIGN1cnJlbnRMb2NhdGlvbi50ZXh0Q29udGVudCA9IG15V2VhdGhlci5sb2NhdGlvbi5uYW1lO1xuXG4gIGlmICh0ZW1wVW5pdCA9PT0gXCJDXCIpIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LnRlbXBfYztcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBteVdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LnRlbXBfZjtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBteVdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgfVxuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke215V2VhdGhlci5jdXJyZW50LnByZXNzdXJlX21ifSBtYmA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7bXlXZWF0aGVyLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gIGNvbnNvbGUubG9nKFwiaGVsbG9cIiwgbXlXZWF0aGVyLmN1cnJlbnQudGVtcF9jKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVW5pdCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcC1idXR0b25cIik7XG4gICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PSBcIsKwQyAvIMKwRlwiKSB7XG4gICAgICBpZiAodGVtcFVuaXQgPT0gXCJDXCIpIHtcbiAgICAgICAgdGVtcFVuaXQgPSBcIkZcIjtcbiAgICAgICAgZGlzcGxheUluZm8obXlXZWF0aGVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcFVuaXQgPSBcIkNcIjtcbiAgICAgICAgZGlzcGxheUluZm8obXlXZWF0aGVyKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codGVtcFVuaXQpO1xuICAgIH1cbiAgfSk7XG59XG5jaGFuZ2VVbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=