import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedDate2 from "./FormattedDate2";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
    return (
        <div className="WeatherInfo">
                <div className="row">
                    <h1 className="col-7 p-3">{props.data.city}</h1>
                    <WeatherIcon image={props.data.icon} alt={props.data.description}/>
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
                <div className="row ps-1 justify-content-between">
                    <div className="col-5">
                        <ul>
                            <li><FormattedDate date={props.data.date} /></li>
                            <li><FormattedDate2 date={props.data.date} /> </li>
                            <li className="text-capitalize">{props.data.description}</li>
                        </ul>
                    </div>
                    <div className="col-5"><ul>
                            <li>Feels like: {Math.round(props.data.feelslike)}°C</li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
};