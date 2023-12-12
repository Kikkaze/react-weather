import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedDate2 from "./FormattedDate2";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function Weatherinfo(props) {
    return (
        <div className="WeatherInfo">
                <div className="row">
                    <h1 className="col-7 p-3">{props.data.city}</h1>
                    <div className="col-2 img-fluid">
                    <WeatherIcon image={props.data.iconcode} alt={props.data.description}/>
                    </div>
                    <div className="col-3 WeatherTemperature">
                    <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                </div>
                <div className="row ps-1 justify-content-between">
                    <div className="col-5 ul-colums">
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