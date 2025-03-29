import { useState } from "react";
import "./App.css";
import Result_card from "./result_card/Result_card"
import History from "./history/History";
import lightMode from "./assets/lightmode.png"
import darkMode from "./assets/darkmode.png"

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weatherInfo,setWeatherInfo] = useState({})
  const [showInfo,setShowInfo] = useState(false)
  const [showHistory,setShowHistory] = useState(false)
  const [historyList, setHistoryList] = useState([])
  const [mode,toggleMode] = useState("light")
  const [loaderValue, setLoaderValue] = useState("")


  async function search_weather(e) {
    // api call
    
    setHistoryList([...historyList, city])
    setShowHistory(false)

    setShowInfo(false)

    setLoaderValue("Loading...")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=e997ba46c9e7d5e7edf3a2ae988246ad&units=metric`)
    .then((res) => {
      const data = res.json()
      return data
    })
    .then((data)=>{

      setLoaderValue("")
      const weather = data.weather[0];
      const temperature = data.main.temp
      const humidity = data.main.humidity
      const wind_speed = data.wind.speed
      const city_name = data.name
      const country_name = data.sys.country

      setWeatherInfo({ weather,temperature,humidity,wind_speed,city_name,country_name})

      console.log(weatherInfo)

      setShowInfo(true)
  
      // console.table({ City : city_name, Country : country_name, Weather: weather, Temperature: temperature, Humidity: humidity, Wind_Speed: wind_speed });
    })
    .catch((error) => {
      console.log("error in loading and fetching data",error);
    })
  }

  return (
    
      <div className={mode==="light" ? 'weather_app_light' : 'weather_app_dark'}>
        <h2 className={mode==="light" ? 'text_color_light' : 'text_color_dark'}>Welcome to Weather App</h2> 
        

        <div className="search">
          <input
            className="search_box"
            type="text"
            value={city}
            placeholder="type city name..."
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="search_box"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="type country name..."
          />
          <button onClick={search_weather} className="button">
            search
          </button>

          <button onClick={search_weather} className="button">
            refresh
          </button>

          <button className="button" onClick={() => {
            setShowHistory((prev) => (prev===false?true:false))
            setShowInfo(false)
            }
          }>History</button>

          <button onClick={()=> {
            toggleMode((prevMode) => (prevMode==="light" ? "dark" : "light"))
            }
          } className="toggle_theme"><img src={mode==="light" ? darkMode : lightMode} height="20px" /></button>
        </div>
        
          <span className="loader" >{loaderValue}</span>
        {showInfo && <Result_card weather_info={weatherInfo} />}
        {showHistory && <History history_list={historyList}/>}

      </div>      
  );
}

export default App;
