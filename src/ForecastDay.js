import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    console.log(props)
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
    
    return (
        <div>
        <h4>{day()}</h4>
        <WeatherIcon image={props.data.condition.icon} alt={props.data.condition.description} />
        <div>{Math.round(props.data.temperature.maximum)}° / {Math.round(props.data.temperature.minimum)}°</div>
        </div>
    );
}