import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';


export default function Weather(props) {

const [weatherData, setWeatherData]= useState({ready: false});
function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        city: (response.data.city),
        date: "Friday 12:00",
        description: (response.data.condition.description),
        temperature: (response.data.temperature.current),
        iconUrl: (response.data.condition.icon_url),
        humidity: (response.data.temperature.humidity),
        wind: (response.data.wind.speed),
    })
}

if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"/>
                </div>
                <div className="col-3">
                <input
                type="sbumit"
                value="Search"
                className="btn btn-primary w-100"
                />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex align-items-start">
                    <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6">
                <ul>
                    <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                    <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                </ul>                
                </div>
            </div>
            </div>
            );
}else {
    const apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);

   return (
    <ThreeDots
  height="80"
  width="80"
  radius="9"
  color="#0d6efd"
  ariaLabel="three-dots-loading"
  wrapperStyle={{ margin: '20px' }}
  wrapperClass="custom-loader"
  visible={true}
/>
   );
}

}