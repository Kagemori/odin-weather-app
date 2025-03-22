let weatherJSON;

function getWeatherJSON(json) {
    weatherJSON = json;
    getTemp();
}

function getTemp(){
    let temp = weatherJSON.currentConditions.feelslike;
    let tempMax = weatherJSON.days[0].tempmax;
    let tempMin = weatherJSON.days[0].tempmin;

    let weatherContainer =  document.querySelector("#weather-container");
    let weatherCurrent = document.createElement("div");
    weatherCurrent.setAttribute("id","weather-top");
    
    let currentTemp = document.createElement("div");
    currentTemp.setAttribute("id","current-temp");
    currentTemp.textContent = temp + "°F";

    let maxTemp = document.createElement("div");
    maxTemp.setAttribute("id","max-temp");
    maxTemp.textContent = tempMax + "°";

    let minTemp = document.createElement("div");
    minTemp.setAttribute("id","min-temp");
    minTemp.textContent = tempMin + "°";

    weatherCurrent.appendChild(currentTemp);
    weatherCurrent.appendChild(maxTemp);
    weatherCurrent.appendChild(minTemp);

    weatherContainer.appendChild(weatherCurrent);
}

export { getWeatherJSON }