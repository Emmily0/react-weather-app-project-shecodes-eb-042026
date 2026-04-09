import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";


export default function WeatherInfo(props) {
return (
    <div className="WeatherInfo">
        <div className="row">
            <div className="col-6">
                <p className="weather-date"><WeatherDate date={props.data.date} /></p>
                <h1>{props.data.city}</h1>
                <ul>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>

                <div className="d-flex align-items-start">
                <WeatherIcon code={props.data.icon} size={64}  />
                <WeatherTemperature celsius={props.data.temperature} />
                </div>
                
                <div className="weather-metrics">  
                    <div className="metric-humidity">
                        <p className="metric-label">Humidity</p>
                        <p className="metric-value">{Math.round(props.data.humidity)}%</p>
                    </div>     
                    <div className="metric-wind">
                        <p className="metric-label">Wind</p>
                        <p className="metric-value">{Math.round(props.data.wind)}km/h</p>
                    </div>
                </div>
                     
            </div>
   
            <div className="col-6">
                 <WeatherForecast coordinates={props.data.coordinates} />
            </div>
        </div>
        </div>
    );
}