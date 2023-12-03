import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedDate2 from "./FormattedDate2";

export default function Weatherinfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <div className="d-flex">
                    <img src={props.data.icon} alt={props.data.description} className="sunicon"></img>
                    <span className="temperature align-self-center">{Math.round(props.data.temperature)}°C</span>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li><FormattedDate date={props.data.date} /></li>
                            <li><FormattedDate2 date={props.data.date} /> </li>
                            <li className="text-capitalize">{props.data.description}</li>
                        </ul>
                    </div>
                    <div className="col-6"><ul>
                            <li>Feels like: {Math.round(props.data.feelslike)}°C</li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
};