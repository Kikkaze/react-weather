import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready:false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            feelslike: response.data.temperature.feels_like,
            humidity: response.data.temperature.humidity,
            icon: response.data.condition.icon_url,
            ready: true,
            temperature: response.data.temperature.current,
            weekday: "Thursday",
            wind: response.data.wind.speed,
        });
    }

    function search() {
        const apiKey = "368a5t8b9e10a64e78c55aob0f467b4c";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);        
    }

    if (weatherData.ready) {
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                <div className="row mb-5">
                  <div className="col-9">
                    <input
                      autofocus="on"
                      type="search"
                      placeholder="Search for a city"
                      className="form-control search-form search-bar"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="search"
                      className="btn btn-primary w-100 search-button"
                    />
                  </div>
                </div>
              </form>
                <Weatherinfo data={weatherData} />
                <Forecast data={weatherData} />
            </div>
        )
    } else {  
        search();  
        return "The app is loading..."
    }
    

};