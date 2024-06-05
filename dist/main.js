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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLFNBQVM7QUFDakcsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNELDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibGFuay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2xpbmtpbmcgbW9kdWxlcyB0byB0aGlzIG1haW4gbW9kdWxlXG52YXIgbG9jYXRpb24gPSBcIm1vc3VsXCI7XG52YXIgdGVtcFVuaXQgPSBcIkNcIjtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xudmFyIG15V2VhdGhlciA9IFwiXCI7XG5mdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gV2UgZG9uJ3Qgd2FudCB0byBzdWJtaXQgdGhpcyBmYWtlIGZvcm1cbiAgICBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbi52YWx1ZTtcbiAgICBmZXRjaFdlYXRoZXIoKTtcbiAgfSk7XG59XG5oYW5kbGVTZWFyY2goKTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKCkge1xuICBjb25zb2xlLmxvZyh7IGxvY2F0aW9uIH0pO1xuICB2YXIgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZ1wiKTtcbiAgbG9hZGluZy50ZXh0Q29udGVudCA9IFwibG9hZGluZ1wiO1xuICBteVdlYXRoZXIgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT01NDQ1YmVkYzYyZWI0NjhjYTYxMTI1NzA1MjQwNDA2JnE9JHtsb2NhdGlvbn1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBteVdlYXRoZXIgPSBhd2FpdCBteVdlYXRoZXIuanNvbigpO1xuICBsb2FkaW5nLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnNvbGUubG9nKG15V2VhdGhlcik7XG4gIGNvbnNvbGUubG9nKG15V2VhdGhlci5jdXJyZW50LnRlbXBfYyk7XG4gIGF3YWl0IGRpc3BsYXlJbmZvKG15V2VhdGhlcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbmZvKG15V2VhdGhlcikge1xuICB2YXIgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50LWxvY2F0aW9uXCIpO1xuICB2YXIgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gIHZhciBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzLWxpa2VcIik7XG4gIHZhciBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlc3N1cmVcIik7XG4gIHZhciBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlcIik7XG4gIGN1cnJlbnRMb2NhdGlvbi50ZXh0Q29udGVudCA9IG15V2VhdGhlci5sb2NhdGlvbi5uYW1lO1xuXG4gIGlmICh0ZW1wVW5pdCA9PT0gXCJDXCIpIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LnRlbXBfYztcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBteVdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LnRlbXBfZjtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBteVdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgfVxuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke215V2VhdGhlci5jdXJyZW50LnByZXNzdXJlX21ifSBtYmA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7bXlXZWF0aGVyLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gIGNvbnNvbGUubG9nKFwiaGVsbG9cIiwgbXlXZWF0aGVyLmN1cnJlbnQudGVtcF9jKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVW5pdCgpIHtcbiAgLy8gLy8gY29uc29sZS5sb2cobXlXZWF0aGVyKVxuICAvLyBpZiAodGVtcFVuaXQgPT09IFwiQ1wiKSB7XG4gIC8vICAgdGVtcFVuaXQgPSBcIkZcIjtcbiAgLy8gICAvLyBkaXNwbGF5SW5mbyhteVdlYXRoZXIpO1xuICAvLyB9XG4gIC8vIGlmICh0ZW1wVW5pdCA9PT0gXCJGXCIpIHtcbiAgLy8gICB0ZW1wVW5pdCA9IFwiQ1wiO1xuICAvLyAgIC8vIGRpc3BsYXlJbmZvKG15V2VhdGhlcik7XG4gIC8vIH1cbiAgY29uc29sZS5sb2coXCJoZWxsb2RkZFwiKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9