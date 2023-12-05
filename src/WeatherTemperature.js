import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function convertFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature col-3">
             <span className="temperature">{Math.round(props.celsius)} {" "} <span className="selectedUnit">°C</span><a href="/" onClick={convertFahrenheit} className="clickableUnitFahrenheit">°F</a></span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
            <div className="WeatherTemperature col-3">
             <span className="temperature align-self-center">{Math.round(fahrenheit)} {" "} <a href="/" onClick={convertCelsius} className="clickableUnit">°C</a><span className="selectedUnitFahrenheit">°F</span></span>
            </div>
        );
    }
}