import React from "react";
import "./Home.css";
import { useState } from "react";
import Result_card from "../result_card/Result_card";
import History from "../history/History";
import lightMode from "../assets/lightmode.png";
import darkMode from "../assets/darkmode.png";
import { Link } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});
  const [error, setError] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [historyList, setHistoryList] = useState([]);
  const [mode, toggleMode] = useState("light");
  const [loaderValue, setLoaderValue] = useState("");

  async function search_weather(e) {
    // api call

    if (city.trim() !== "" && country.trim() !== "") {
      const lastSearch = city + ", " + country;
      setHistoryList([...historyList, lastSearch]);
    }

    setShowHistory(false);

    setError("");

    setShowInfo(false);

    setLoaderValue("Loading...");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=e997ba46c9e7d5e7edf3a2ae988246ad&units=metric`
    )
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        setLoaderValue("");
        const weather = data.weather[0];
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const wind_speed = data.wind.speed;
        const city_name = data.name;
        const country_name = data.sys.country;

        setWeatherInfo({
          weather,
          temperature,
          humidity,
          wind_speed,
          city_name,
          country_name,
        });

        console.log(weatherInfo);

        setShowInfo(true);

        // console.table({ City : city_name, Country : country_name, Weather: weather, Temperature: temperature, Humidity: humidity, Wind_Speed: wind_speed });
      })
      .catch((error) => {
        let errMess;
        if (city.trim() === "" && country.trim() === "") {
          errMess = "Please enter city and country name / code ";
        } else if (city.trim() === "") {
          const errMess = "City cannot be empty";
        } else if (country.trim() === "") {
          const errMess = "country cannot be empty";
        }

        // const errName = error.name.toString()
        // const errMessage = error.message

        // const fullError = errName + " | " + errMessage
        setLoaderValue("");
        setError(errMess);
        console.log("error in loading and fetching data", error);
      });
  }

  async function weather_forecast() {
    fetch(
      `api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=e997ba46c9e7d5e7edf3a2ae988246ad&units=metric`
    )
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        // manage data
      })
      .catch((error) => {
        console.log("error in forcasting weather");
      });
  }

  return (
    <>
      <nav className="navbar">
        <h2
          className={mode === "light" ? "text_color_light" : "text_color_dark"}
        >
          Welcome to Weather App
        </h2>

        <div className="change_mode">
          <button
            onClick={() => {
              toggleMode((prevMode) =>
                prevMode === "light" ? "dark" : "light"
              );
            }}
            className="toggle_theme"
          >
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          <img
            src={mode === "light" ? darkMode : lightMode}
            height="25px"
            width="25px"
            className="mode_image"
          />
        </div>
      </nav>

      <div
        className={mode === "light" ? "weather_app_light" : "weather_app_dark"}
      >
        <div className="search">
          <span
            className={
              mode === "light" ? "input_headings_light" : "input_headings_dark"
            }
          >
            Enter City Name :{" "}
          </span>
          <input
            className="search_box"
            type="text"
            value={city}
            placeholder="type city name..."
            onChange={(e) => setCity(e.target.value)}
          />

          <span
            className={
              mode === "light" ? "input_headings_light" : "input_headings_dark"
            }
          >
            Enter Country Name :{" "}
          </span>
          <input
            className="search_box"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="type country name..."
          />
        </div>
        <div className="buttons">
          {/* <Link to="/result"> */}
          <button onClick={search_weather} className="button">
            search
          </button>
          {/* </Link> */}

          <button onClick={search_weather} className="button">
            refresh
          </button>

          <button onClick={weather_forecast} className="button">
            forecast
          </button>

          <button
            className="button"
            onClick={() => {
              setShowHistory((prev) => (prev === false ? true : false));
              setShowInfo(false);
            }}
          >
            History
          </button>
        </div>

        <span className={mode === "light" ? "loader_light" : "loader_dark"}>
          {loaderValue}
        </span>
        <span className={mode === "light" ? "loader_light" : "loader_dark"}>
          {error}
        </span>

        {showInfo && <Result_card weather_info={weatherInfo} app_mode={mode} />}
        {showHistory && <History history_list={historyList} app_mode={mode} />}
      </div>
    </>
  );
}

export default Home;
