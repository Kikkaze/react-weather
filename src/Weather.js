import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedDate2 from "./FormattedDate2";
import axios from "axios";
import "./Weather.css";
import sunicon from "./sunicon.png";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready:false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            feelslike: response.data.temperature.feels_like,
            humidity: response.data.temperature.humidity,
            icon: sunicon,
            ready: true,
            temperature: response.data.temperature.current,
            weekday: "Thursday",
            wind: response.data.wind.speed,
        });
    }

    if (weatherData.ready) {
        return(
            <div className="Weather">
                 <form>
                <div className="row mb-5">
                  <div className="col-9">
                    <input
                      autofocus="on"
                      type="search"
                      placeholder="Search for a city"
                      className="form-control search-form search-bar"
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
                <h1>{weatherData.city}</h1>
                <div className="d-flex">
                    <img src={weatherData.icon} alt={weatherData.description} className="sunicon"></img>
                    <span className="temperature align-self-center">{Math.round(weatherData.temperature)}°C</span>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li><FormattedDate date={weatherData.date} /></li>
                            <li><FormattedDate2 date={weatherData.date} /> </li>
                            <li className="text-capitalize">{weatherData.description}</li>
                        </ul>
                    </div>
                    <div className="col-6"><ul>
                            <li>Feels like: {Math.round(weatherData.feelslike)}°C</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
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
        const apiKey = "368a5t8b9e10a64e78c55aob0f467b4c";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);    
    
        return "The app is loading..."
    }
    

};