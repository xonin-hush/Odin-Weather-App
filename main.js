/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//linking modules to this main module
var location = "mosul";
var tempUnit = "C";
const search = document.getElementById("search");

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
  var myWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5445bedc62eb468ca61125705240406&q=${location}`,
    { mode: "cors" }
  );
  myWeather = await myWeather.json();
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
  humidity.textContent=   `${myWeather.current.humidity}%`
  console.log("hello", myWeather.current.temp_c);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBLHdGQUF3RixTQUFTO0FBQ2pHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0QsNkJBQTZCLDJCQUEyQjtBQUN4RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhbmsvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9saW5raW5nIG1vZHVsZXMgdG8gdGhpcyBtYWluIG1vZHVsZVxudmFyIGxvY2F0aW9uID0gXCJtb3N1bFwiO1xudmFyIHRlbXBVbml0ID0gXCJDXCI7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFdlIGRvbid0IHdhbnQgdG8gc3VibWl0IHRoaXMgZmFrZSBmb3JtXG4gICAgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb24udmFsdWU7XG4gICAgZmV0Y2hXZWF0aGVyKCk7XG4gIH0pO1xufVxuaGFuZGxlU2VhcmNoKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcigpIHtcbiAgY29uc29sZS5sb2coeyBsb2NhdGlvbiB9KTtcbiAgdmFyIG15V2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTU0NDViZWRjNjJlYjQ2OGNhNjExMjU3MDUyNDA0MDYmcT0ke2xvY2F0aW9ufWAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIG15V2VhdGhlciA9IGF3YWl0IG15V2VhdGhlci5qc29uKCk7XG4gIGNvbnNvbGUubG9nKG15V2VhdGhlcik7XG4gIGNvbnNvbGUubG9nKG15V2VhdGhlci5jdXJyZW50LnRlbXBfYyk7XG4gIGF3YWl0IGRpc3BsYXlJbmZvKG15V2VhdGhlcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbmZvKG15V2VhdGhlcikge1xuICB2YXIgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50LWxvY2F0aW9uXCIpO1xuICB2YXIgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gIHZhciBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzLWxpa2VcIik7XG4gIHZhciBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlc3N1cmVcIik7XG4gIHZhciBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlcIik7XG4gIGN1cnJlbnRMb2NhdGlvbi50ZXh0Q29udGVudCA9IG15V2VhdGhlci5sb2NhdGlvbi5uYW1lO1xuXG4gIGlmICh0ZW1wVW5pdCA9PT0gXCJDXCIpIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LnRlbXBfYztcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBteVdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IG15V2VhdGhlci5jdXJyZW50LnRlbXBfZjtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBteVdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgfVxuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke215V2VhdGhlci5jdXJyZW50LnByZXNzdXJlX21ifSBtYmA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50PSAgIGAke215V2VhdGhlci5jdXJyZW50Lmh1bWlkaXR5fSVgXG4gIGNvbnNvbGUubG9nKFwiaGVsbG9cIiwgbXlXZWF0aGVyLmN1cnJlbnQudGVtcF9jKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==