import React from "react";

export default function ForecastDay(props) {
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
    
    return (
        <div>
        <h4>{day()}</h4>
        <img src={props.data.condition.icon_url} alt={props.data.condition.description}></img>
        <div>{Math.round(props.data.temperature.maximum)}° / {Math.round(props.data.temperature.minimum)}°</div>
        </div>
    );
}