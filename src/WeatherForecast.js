import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast (props) {
const [forecastReady, setForecastReady] = useState(false);
const [forecastData, setForecastData] = useState(null);
function handleResponse(response) {
    setForecastData(response.data.daily);
    setForecastReady(true);
    }

if (forecastReady) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                 <WeatherForecastDay data={forecastData[0]} />
                </div>
            </div>
        </div>
            );
  
} else {

    let apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
    return null;
}
}