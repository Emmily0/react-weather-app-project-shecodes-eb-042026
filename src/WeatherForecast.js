import React, { useState, useEffect } from "react";
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

useEffect(() => {
setForecastReady(false);
    const apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    const apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
}, [props.coordinates]);

if (forecastReady) {
    return (
        <div className="WeatherForecast">
        <p className="metric-label">5-day forecast</p>
        <div className="WeatherForecast-row">
            {forecastData.slice(1, 6).map(function(dailyForecast, index){
                    return (
                        <div className="WeatherForecast-col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                           </div>
                           );
            })}
        </div>
    </div>
    );
} else {
    return null;
}
}