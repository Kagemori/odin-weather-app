import { startTime } from "./clock";
import "./css/styles.css";
import { getData, showData } from "./sampleweather";
import { getWeatherJSON } from "./weather";

showData();
startTime();
getWeatherJSON(getData());