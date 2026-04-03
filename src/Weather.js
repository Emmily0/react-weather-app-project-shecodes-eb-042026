import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..."
                className="form-control"/>
                </div>
                <div className="col-3">
                <input
                type="sbumit"
                value="Search"
                className="btn btn-primary"
                />
                </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Friday 12:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img
                    src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                    alt="Mostly Cloudy"/>
                12°C
                </div>
                <div className="col-6">
                <ul>
                    <li>Precipitation: 10%</li>
                    <li>Humidity: 87%</li>
                    <li>Wind: 11 km/h</li>
                </ul>                
                </div>
            </div>

        </div>
    );
}