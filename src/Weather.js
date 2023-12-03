import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import "./Weather.css";
import sunicon from "./sunicon.png";

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
            icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
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
                <div className="row forecast">
                    <div className="col-2 singleday">
                        <h4>Fri</h4>
                        <img src={sunicon} alt="Sun Icon"></img>
                        <div>14° / 10°</div>
                    </div>
                    <div className="col-2 singleday">
                        <h4>Sat</h4>
                        <img src={sunicon} alt="Sun Icon"></img>
                        <div>14° / 10°</div>
                    </div>
                    <div className="col-2 singleday">
                        <h4>Sun</h4>
                        <img src={sunicon} alt="Sun Icon"></img>
                        <div>14° / 10°</div>
                    </div>
                    <div className="col-2 singleday">
                        <h4>Mon</h4>
                        <img src={sunicon} alt="Sun Icon"></img>
                        <div>14° / 10°</div>
                    </div>
                    <div className="col-2 singleday">
                        <h4>Tue</h4>
                        <img src={sunicon} alt="Sun Icon"></img>
                        <div>14° / 10°</div>
                    </div>
                    <div className="col-2 singleday">
                        <h4>Wed</h4>
                        <img src={sunicon} alt="Sun Icon"></img>
                        <div>14° / 10°</div>
                    </div>
                </div>
            </div>
        )
    } else {  
        search();  
        return "The app is loading..."
    }
    

};