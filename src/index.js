//linking modules to this main module
import { add } from "lodash";
import { out2 } from "./ToDo";
import { out } from "./projects";
var location = "mosul";
const search = document.getElementById("search");

async function fetchWeather() {
  console.log({ location });
  var myWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5445bedc62eb468ca61125705240406&q=${location}`,
    { mode: "cors" }
  );
  myWeather = await myWeather.json();
  console.log(myWeather.current.temp_c);
}
function handleSearch() {
  search.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    location = document.getElementById("location");
    location = location.value;
    fetchWeather();
  });
}
handleSearch();
