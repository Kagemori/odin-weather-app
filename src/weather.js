let weatherJSON;

function getWeatherJSON(json) {
    weatherJSON = json;
    getCurrentTemp();
}

function getCurrentTemp(){
    let temp = weatherJSON.currentConditions.feelslike;
    let tempMax = weatherJSON.days[0].tempmax;
    let tempMin = weatherJSON.days[0].tempmin;
    let curDesc = weatherJSON.days[0].conditions;
    let curDesc2 = weatherJSON.days[0].description;
    let precipitype = weatherJSON.days[0].preciptype;
    let windSpd = weatherJSON.days[0].windspeed;
    let windDir = weatherJSON.days[0].winddir;

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

    let currentDesc = document.createElement("div");
    currentDesc.setAttribute("id","current-desc");
    currentDesc.textContent = curDesc;

    let currentDesc2 = document.createElement("div");
    currentDesc2.setAttribute("id","current-desc-2");
    currentDesc2.textContent = curDesc2;

    weatherCurrent.appendChild(currentTemp);
    weatherCurrent.appendChild(maxTemp);
    weatherCurrent.appendChild(minTemp);
    weatherCurrent.appendChild(currentDesc);
    weatherCurrent.appendChild(currentDesc2);

    if(precipitype !== null){
        let precipProb = weatherJSON.days[0].precipprob;
        
        let precip = document.createElement("div");
        precip.setAttribute("id","precip");
        precip.textContent = checkPrecip(precipitype) + precipProb + "%";

        weatherCurrent.appendChild(precip);
    }

    let wind = document.createElement("div");
    wind.setAttribute("id","wind-weather");
    wind.textContent = checkWind(windSpd, windDir);

    weatherCurrent.appendChild(wind);

    weatherContainer.appendChild(weatherCurrent);
}

function checkPrecip(preciptype){
    let descriptor = "Chance of ";
    preciptype.forEach(element => {
        if(element === preciptype[preciptype.length-1]){
            descriptor += element + ": ";
        }else{
            descriptor += element + ", ";
        }
    });
    return descriptor;
}

function checkWind(speed, direction){
    let dirName = "";

    if(direction >= 337.6 || direction <= 22.5){
        dirName = "North";
    }else if(direction >= 22.6 && direction <= 67.5){
        dirName = "Northeast";
    }else if(direction >= 67.6 && direction <= 112.5){
        dirName = "East";
    }else if(direction >= 112.6 && direction <= 157.5){
        dirName = "Southeast";
    }else if(direction >= 157.6 && direction <= 202.5){
        dirName = "South";
    }else if(direction >= 202.6 && direction <= 247.5){
        dirName = "Southwest";
    }else if(direction >= 247.6 && direction <= 292.5){
        dirName = "West";
    }else if(direction >= 292.6 && direction <= 337.5){
        dirName = "Northwest";
    }

    let windDesc = "Wind: " + speed + " mi/h " + dirName;

    return windDesc;
}

export { getWeatherJSON }