import React, { useState } from "react";

export default function WeatherTemperature(props) {
    
const[unit, setUnit] = useState("celsius");

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function fahrenheit() {
    return (props.celsius *9) / 5 + 32;
}


if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
        <span 
        className="temperature">{Math.round(props.celsius)}
        </span>
        <span className="unit">
        <span className="active-unit">°C</span>
        {" "} | {" "}
        <span className="inactive-unit" onClick={showFahrenheit}>
        °F
        </span>    
        </span>
        </div>
    );
}else {
    return (
        <div className="WeatherTemperature">
        <span 
        className="temperature">{Math.round(fahrenheit())}
        </span>
        <span className="unit">
        <span className="inactive-unit" 
        onClick={showCelsius}>
        °C
        </span>
        {" "} | {" "}
        <span className="active-unit">°F</span>
        </span>
        </div>
    );
}
}