//linking modules to this main module
import { out2 } from "./ToDo";
import { out } from "./projects";

const location= "iraq"
async function hello() {
  const myWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5445bedc62eb468ca61125705240406&q=${location}`,
    { mode: "cors" }
  );
  console.log(myWeather.json());
}
hello();
