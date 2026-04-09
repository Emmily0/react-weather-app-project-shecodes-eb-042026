import React from "react";
import "./WeatherOutfit.css";
import summerBeachOutfit from "./images/summer-beach-outfit_canvaAI.jpg";
import summerOutfit from "./images/summer-outfit_canvaAI.jpg";
import springOutfit from "./images/spring-outfit_canvaAI.jpg";
import casualOutfit from "./images/casual-outfit_canvaAI.jpg";
import windOutfit from "./images/wind-outfit_canvaAI.jpg";
import winterOutfit from "./images/winter-outfit_canvaAI.jpg";
import snowyOutfit from "./images/snowy-outfit_canvaAI.jpg";
import rainOutfit from "./images/rain-outfit_canvaAI.jpg";

export default function WeatherOutfit(props)  {
    
function outfitData(){
const icon = props.icon;
const temp = props.celsius;
const wind = props.wind;
const feelsLike = props.feelsLike; 


    if (icon && icon.includes("rain")) {
        return {
            title: "Rain outfit",
            description: "Waterproof jacket and boots. Do not forget an umbrella.",
            photo: rainOutfit,
            showPhoto: true,
        };
    }

    if (icon && icon.includes("snow")) {
    return {
        title: "Snow outfit",
        description: "Heavy coat, boots, gloves and a hat. Layer up.",
        photo: snowyOutfit,
        showPhoto: true,
    };
    }

    if (icon && icon.includes("thunder")) {
    return {
        title: "Storm outfit",
        description: "Stay indoors if possible. Waterproof layers if you must go out.",
        photo: rainOutfit,
        showPhoto: true,
    };
    }

    if (icon && icon.includes("mist")) {
    return {
        title: "Misty morning",
        description: "Light jacket and closed shoes. Visibility is low.",
        photo: casualOutfit,
        showPhoto: true,
    };
    }

    if ((temp >= 22 && icon && icon.includes("clear")) || (temp >= 22 && icon && icon.includes("few-clouds"))) {
        if (wind >30) {
            return {
                title: "Sunny but breezy",
                description: "Light top but bring a scarf or a light jacket. Wind will catch you off guard.",
                photo: summerOutfit,
                showPhoto: true,
            };
        }
    return {
        title: "Light summer outfit",
        description: "T-shirt, sunglasses, light trousers. No jacket needed today.",
        photo: summerBeachOutfit,
        showPhoto: true,
    };
    }

    if (temp >= 15 && temp < 22) {
        if (wind > 30) {
            return {
                title: "Breezy layers",
                description: "A windproof jacket is essential today. Scarf recommended.",
                photo: windOutfit,
                showPhoto: true,
            };
        }
    return {
        title: "Light layers",
        description: "A light jacket or cardigan. Jeans and comfortable shoes.",
        photo: springOutfit,
        showPhoto: true,
    };
    }

    if (temp >= 5 && temp < 15) {
        if (wind > 20) {
            return {
                title: "Wrap up well",
                description: `Coat, scarf and gloves. Feels like ${feelsLike}°C today. Wind makes it feel much colder.`,
                photo: windOutfit,
                showPhoto: true,
            };
        }
    return {
        title: "Warm layers",
        description: `A coat and scarf. Feels like ${feelsLike}°C today. Dress in layers you can remove.`,
        photo: casualOutfit,
        showPhoto: true,
    };
    }

    if (temp < 5) {
    return {
        title: "Winter outfit",
        description: "Heavy coat, boots and gloves. Cover up completely.",
        photo: winterOutfit,
        showPhoto: true,
    };
    }

  return {
    title: "Comfortable layers",
    description: "Check conditions before heading out.",
    photo: casualOutfit,
    showPhoto: true,
  };
}

const outfit = outfitData();

return (
    <div className="WeatherOutfit">
        {props.showImage && ( 
            <div className="outfit-image-wrapper">
            <img 
            src={outfit.photo}
            alt={outfit.title}
            className="img-fluid w-100"
            />
            </div>
        )}
        {props.showImage === false && (
           <div className="outfit-recommendation">
           <p className="outfit-label">What to wear</p>
           <p className="outfit-title">{outfit.title}</p>
           <p className="outfit-description">{outfit.description}</p>
       </div>
        )}
        </div>
    );
 }