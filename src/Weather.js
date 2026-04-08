import React, {useState, useEffect} from "react";
import "./Weather.css";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {

const [weatherData, setWeatherData]= useState({ready: false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    setWeatherData({
        ready: true,
        city: (response.data.city),
        coordinates: (response.data.coordinates),
        date: new Date(response.data.time * 1000),
        description: (response.data.condition.description),
        temperature: (response.data.temperature.current),
        icon: (response.data.condition.icon),
        humidity: (response.data.temperature.humidity),
        wind: (response.data.wind.speed),
    })
}

function search (){
    const apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
    
}

useEffect(() => {
    search();
}, []);

function handleSubmit(event){
event.preventDefault();
search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..."
                className="form-control"
                autoFocus={true}
                onChange={handleCityChange}
                />
                </div>
                <div className="col-3">
                <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
            );
}else {
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