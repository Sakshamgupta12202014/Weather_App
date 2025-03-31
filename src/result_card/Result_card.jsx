
import React from "react";
import "./Result_card.css";

function Result_card({ weather_info, app_mode }) {
  // weather_info is an object
  if (!weather_info) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <div className="result_card">
      <div
        className={
          app_mode === "light" ? "weather_card_light" : "weather_card_dark"
        }
      >
        <h3 className={app_mode === "light" ? "text_light" : "text_dark"}>
          Current Weather in {weather_info.city_name}
        </h3>
        <p className={app_mode === "light" ? "text_light" : "text_dark"}>
          {weather_info.city_name}, {weather_info.country_name}
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${weather_info.weather.icon}@2x.png`}
          alt={weather_info.weather.description}
          className="weather_icon"
        />
        <p
          className={
            app_mode === "light" ? "temperature_light" : "temperature_dark"
          }
        >
          {weather_info.temperature}°C
        </p>
        <p className={app_mode === "light" ? "text_light" : "text_dark"}>
          {weather_info.weather.description}
        </p>
        <div className="weather_details">
          <p className={app_mode === "light" ? "text_light" : "text_dark"}>
            <b>Humidity:</b> {weather_info.humidity}%
          </p>
          <p className={app_mode === "light" ? "text_light" : "text_dark"}>
            <b>Wind Speed:</b> {weather_info.wind_speed} km/h
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result_card;
