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
            vogue: "This is your moment for a trench and a bold lip. Own the rain.",
            description: "Waterproof jacket and boots. Grab an umbrella and avoid suede or leather shoes today.",
            photo: rainOutfit,
            showPhoto: true,
        };
    }

    if (icon && icon.includes("snow")) {
    return {
        title: "Snow outfit",
        vogue: "Monochrome knits and knee-high boots. Cold never looked this good.",
        description: "Heavy coat, boots, gloves and a hat. Layer up and allow extra travel time.",
        photo: snowyOutfit,
        showPhoto: true,
    };
    }

    if (icon && icon.includes("thunder")) {
    return {
        title: "Storm outfit",
        vogue: "Drama outside means drama in your outfit. Go full waterproof, go full force.",
        description: "Stay indoors if possible. If you must go out, full waterproof layers and avoid open spaces.",
        photo: rainOutfit,
        showPhoto: true,
    };
    }

    if (icon && icon.includes("mist")) {
    return {
        title: "Misty morning",
        vogue: "Soft light, soft palette. A neutral trench and minimal accessories is all you need.",
        description: "Light jacket and closed shoes. Visibility is low, so take it slow.",
        photo: casualOutfit,
        showPhoto: true,
    };
    }

    if ((temp >= 22 && icon && icon.includes("clear")) || (temp >= 22 && icon && icon.includes("few-clouds"))) {
        if (wind >30) {
            return {
                title: "Sunny but breezy",
                vogue: "The wind is not a problem. It is a hair moment. Dress light, anchor with a scarf.",
                description: "Light top but bring a scarf or a light jacket. The wind will catch you off guard.",
                photo: summerOutfit,
                showPhoto: true,
            };
        }
    return {
        title: "Light summer outfit",
        vogue: "Sun out, shoulders out. SPF is the only accessory that matters right now.",
        description: "T-shirt, sunglasses and light trousers. SPF recommended. No jacket needed today.",
        photo: summerBeachOutfit,
        showPhoto: true,
    };
    }

    if (temp >= 15 && temp < 22) {
        if (wind > 30) {
            return {
                title: "Breezy layers",
                vogue: "A strong silhouette beats the wind every time. Structured jacket, nothing loose.",
                description: "A windproof jacket is essential today. Scarf recommended and secure loose items.",
                photo: windOutfit,
                showPhoto: true,
            };
        }
    return {
        title: "Light layers",
        vogue: "This is the perfect temperature for your best transitional look. Do not waste it.",
        description: "A light jacket or cardigan works well. Jeans and comfortable shoes. Good weather for a walk.",
        photo: springOutfit,
        showPhoto: true,
    };
    }

    if (temp >= 5 && temp < 15) {
        if (wind > 20) {
            return {
                title: "Wrap up well",
                vogue: "Cold and windy is just code for coat weather. Make it a statement one.",
                description: `Coat, scarf and gloves. Feels like ${feelsLike}°C with the wind chill. Dress warmer than you think.`,
                photo: windOutfit,
                showPhoto: true,
            };
        }
    return {
        title: "Warm layers",
        vogue: "Layers are not a compromise. They are a strategy. Build your outfit from the inside out.",
        description: `A coat and scarf will serve you well. Feels like ${feelsLike}°C today. Layer up so you can adjust indoors.`,
        photo: casualOutfit,
        showPhoto: true,
    };
    }

    if (temp < 5) {
    return {
        title: "Winter outfit",
        vogue: "Maximalism is not optional today. Pile it on and make cold weather your aesthetic.",
        description: "Heavy coat, thermal layers, boots and gloves. Minimise time outside if you can.",
        photo: winterOutfit,
        showPhoto: true,
    };
    }

  return {
    title: "Comfortable layers",
    vogue: "When in doubt, a clean silhouette and good shoes will always carry you.",
    description: "Dress in comfortable layers and check conditions before heading out.",
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
            loading="lazy"
            className="img-fluid w-100"
            />
            </div>
        )}
        {props.showImage === false && (
           <div className="outfit-recommendation">
           <p className="outfit-label">What to wear</p>
           <p className="outfit-title">{outfit.title}</p>
           <p className="outfit-vogue">{outfit.vogue}</p>
           <p className="outfit-description">{outfit.description}</p>
       </div>
        )}
        </div>
    );
 }