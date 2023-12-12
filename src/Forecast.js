import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {setLoaded(false);}, [props.data.city]);

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }
 
    if (loaded) {
        return (
            <div className="row forecast">
                {forecastData.map(function (dailyForecast, index) {
                    if (index < 6) {
                        return (
                            <div className="col-md-2 singleday" key={index}>
                                <ForecastDay data={dailyForecast} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );
        
    } else {
    let apiKey = "368a5t8b9e10a64e78c55aob0f467b4c"
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`
    
    axios.get(apiUrl).then(handleResponse);
}
}