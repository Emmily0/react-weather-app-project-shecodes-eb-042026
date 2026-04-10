import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";
import welcomePageOutfit from "./images/welcome-page-outfit_canvaAI.jpg";



export default function Weather(props) {

const [weatherData, setWeatherData]= useState({ready: false});
const [city, setCity] = useState("");
const [loading, setLoading] = useState(false);
const [notFound, setNotFound] = useState(false);

function formatCountry(country) {
    const countryMap = {
        "United Kingdom of Great Britain and Northern Ireland": "UK",
        "United States of America": "USA",
        "United Arab Emirates": "UAE",
        "Russian Federation": "Russia",
        "Korea, Republic of": "South Korea",
        "Korea (Republic of)": "South Korea",
        "Korea, Democratic People's Republic of": "North Korea",
        "Korea (Democratic People's Republic of)": "North Korea",
        "Taiwan, Province of China": "Taiwan",
        "Iran, Islamic Republic of": "Iran",
        "Syrian Arab Republic": "Syria",
        "Bolivia, Plurinational State of": "Bolivia",
        "Bolivia (Plurinational State of)": "Bolivia",
        "Venezuela, Bolivarian Republic of": "Venezuela",
        "Venezuela (Bolivarian Republic of)": "Venezuela",
        "Tanzania, United Republic of": "Tanzania",
        "Moldova, Republic of": "Moldova",
        "Moldova (Republic of)": "Moldova",
        "Macedonia, the Former Yugoslav Republic of": "North Macedonia",
        "Iran (Islamic Republic of)": "Iran",
        "Congo, the Democratic Republic of the": "DR Congo",
        "Congo, Republic of the": "Congo",
        "Congo (Democratic Republic of the)": "DR Congo",
        "Lao People's Democratic Republic": "Laos",
        "Libyan Arab Jamahiriya": "Libya",
        "Macao Special Administrative Region": "Macao",
        "Hong Kong Special Administrative Region": "Hong Kong",
        "Hong Kong": "Hong Kong",
        "Palestine, State of": "Palestine",
        "Viet Nam": "Vietnam",
        "Myanmar (Burma)": "Myanmar",
        "Czechia": "Czech Republic",
        "Türkiye": "Turkey",
    };
    return countryMap[country] || country;
}

function handleResponse(response) {
    if (response.data.condition) {
    setWeatherData({
        ready: true,
        city: (response.data.city),
        country: formatCountry(response.data.country),
        coordinates: (response.data.coordinates),
        date: new Date(response.data.time * 1000),
        description: (response.data.condition.description),
        temperature: (response.data.temperature.current),
        icon: (response.data.condition.icon),
        humidity: (response.data.temperature.humidity),
        wind: (response.data.wind.speed),
        feelsLike: Math.round(response.data.temperature.feels_like),
    });
} else {
    setNotFound(true);
}
    setLoading(false);
}

function search (){
    setLoading(true);
    setNotFound(false);
    const apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
    
}

function handleSubmit(event){
event.preventDefault();
search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

function renderContent() {
    if (loading) {
        return (
            <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#b76d61"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: '20px' }}
            wrapperClass="custom-loader"
            visible={true}
          />
        );
    }

    if (notFound) {
        return (
            <div className="not-found">
                <p className="not-found-message">City not found. Please try another search</p>
            </div>
        );
    }

    if (weatherData.ready) {
        return  <WeatherInfo data={weatherData} /> ;  
    }

    return (
        <div className="welcome-state">
            <p className="welcome-title">What is the weather like today</p>
            <p className="welcome-subtitle">Search your city to get the forecast and outfit recommendation.</p>
            <img src={welcomePageOutfit} alt="outfit inspiration" className="welcome-image"  loading="lazy" />
        </div>
    );
}

return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <input 
                type="search" 
                placeholder="Enter your city here..."
                className="search-input"
                autoFocus={true}
                onChange={handleCityChange}
                />
                <input
                type="submit"
                value="Search"
                className="search-submit"
                />
            </form>

            {renderContent()}
            </div>
        );
       
    }