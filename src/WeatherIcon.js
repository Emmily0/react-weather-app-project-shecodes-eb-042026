import React from "react";
import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherIcon(props) {
    const codeMapping = {
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "PARTLY_CLOUDY_DAY",
        "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
        "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "broken-clouds-day": "CLOUDY",
        "broken-clouds-night": "CLOUDY",
        "shower-rain-day": "RAIN",
        "shower-rain-night": "RAIN",
        "rain-day": "RAIN",
        "rain-night": "RAIN",
        "thunderstorm-day": "SLEET",
        "thunderstorm-night": "SLEET",
        "snow-day": "SNOW",
        "snow-night": "SNOW",
        "mist-day": "FOG",
        "mist-night": "FOG",
    };

    function getColor(code) {
        if (code.includes("night")) return "#28c4b7";
        if (code.includes("clear")) return "goldenrod";
        if (code.includes("few-clouds")) return "goldenrod";
        if (code.includes("rain") || code.includes("thunder")) return "#6c8ebf";
        if (code.includes("snow")) return "#a8d8ea";
        return "gray";
      }
   
    return (
        <ReactAnimatedWeather
        icon={codeMapping[props.code] || "CLOUDY"}
        color={getColor(props.code)}
        size={50}
        animate={true}
        />
    );
}
