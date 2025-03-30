/*
- A weather info card showing:
  - City Name
  - Current Temperature (°C)
  - Weather Condition (e.g., Sunny, Rainy, Snow)
  - Humidity (%)
  - Wind Speed (km/h)
  - Weather Icon (use the icon provided by the API)
- Show loading state while data is being fetched
- Show error state if:
  - The city name is invalid
  - The API fails to respond
*/

import React from "react";
import "./Result_card.css"

function Result_card({weather_info,app_mode}) {
  // weather_info is an object
  if (!weather_info) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <div className={app_mode==="light" ? "weather_card_light" : "weather_card_dark"}>
      <h3 className={app_mode==="light" ? "text_light" : "text_dark"}>Current Weather in {weather_info.city_name}</h3>
      <p className={app_mode==="light" ? "text_light" : "text_dark"}>
        {weather_info.city_name}, {weather_info.country_name}
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weather_info.weather.icon}@2x.png`}
        alt={weather_info.weather.description}
        className="weather_icon"
      />
      <p className={app_mode==="light" ? "temperature_light" : "temperature_dark"}>{weather_info.temperature}°C</p>
      <p className={app_mode==="light" ? "text_light" : "text_dark"}>{weather_info.weather.description}</p>
      <div className="weather_details">
        <p className={app_mode==="light" ? "text_light" : "text_dark"}>
          <b>Humidity:</b> {weather_info.humidity}%
        </p>
        <p className={app_mode==="light" ? "text_light" : "text_dark"}>
          <b>Wind Speed:</b> {weather_info.wind_speed} km/h
        </p>
      </div>
    </div>
  );
}

export default Result_card;
