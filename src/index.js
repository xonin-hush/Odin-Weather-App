//linking modules to this main module
import { add } from "lodash";
import { out2 } from "./ToDo";
import { out } from "./projects";
var location = "mosul";
const search = document.getElementById("search");

async function fetchWeather() {
    console.log({location})
  const myWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5445bedc62eb468ca61125705240406&q=${location}`,
    { mode: "cors" }
  );
  console.log(myWeather.json());
}
function try1() {
  search.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    location = document.getElementById("location");
    console.log(location)
    location=location.value
    console.log(location)
    fetchWeather()
  });
}
try1();
