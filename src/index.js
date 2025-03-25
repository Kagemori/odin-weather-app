import { startTime } from "./clock";
import "./css/styles.css";
import { getData, showData } from "./sampleweather";
import { buildSearchBar, clearAllWeatherData, search } from "./search";
import { getWeatherJSON } from "./weather";

showData();
startTime();

buildSearchBar();
const searchButton = document.getElementById("search-button");
searchButton.addEventListener(`click`, e => {
    e.preventDefault();

    clearAllWeatherData();

    search();
})

getWeatherJSON(getData());