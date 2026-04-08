import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (props) {
function handleResponse(response) {
    }

let apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return (
<div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className= "WeatherForecast-day">Thu </div>
            <WeatherIcon 
            code="clear-sky-day"
            size={30} />
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">19°</span>
                <span className="WeatherForecast-temperature-min">10°</span>
            </div>
        </div>
    </div>
</div>
    );
}