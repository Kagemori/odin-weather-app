import { getWeatherJSON } from "./weather";
import apikey from './apikey.txt';

function buildSearchBar(){
    let searchContainer = document.querySelector("#search-bar");

    let searchBar = document.createElement("input");
    searchBar.setAttribute("type","text");
    searchBar.setAttribute("placeholder","Search location...");
    searchBar.setAttribute("id","search-input");

    let searchButton = document.createElement("button");
    searchButton.setAttribute("id","search-button");
    searchButton.textContent = "🔎";

    searchContainer.appendChild(searchBar);
    searchContainer.appendChild(searchButton);
}

async function search(){
    const query = document.getElementById(`search-input`).value;
    console.log(`Searching: ${query}`);

    const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

    let currentDate = Math.floor(Date.now() / 1000);
    let weekLater = Math.floor((Date.now() + 7 * 24 * 60 * 60 * 1000) / 1000);
    let dates = "/" + currentDate + "/" + weekLater;

    let fullURL = baseURL + encodeURIComponent(query) + dates + apikey;
    console.log(fullURL);

    try {
        const response = await fetch(fullURL);

        if(!response.ok){
            throw new Error(`Network response not ok.`);
        }

        const data = await response.json();
        console.log('API Response:',data);

        getWeatherJSON(data);
    } catch (error){
        console.error('There was a problem with the fetch operation:', error);
    }


}

function clearAllWeatherData() {
    let weatherContainer = document.querySelector("#weather-container");
    let forecastContainer = document.querySelector("#weather-forecast");

    weatherContainer.classList.remove(...weatherContainer.classList);

    while(weatherContainer.lastElementChild) {
        weatherContainer.removeChild(weatherContainer.lastElementChild);
    }

    while(forecastContainer.lastElementChild) {
        forecastContainer.removeChild(forecastContainer.lastElementChild);
    }
}

export {buildSearchBar, search, clearAllWeatherData};