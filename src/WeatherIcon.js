import React from "react";

export default function WeatherIcon (props) {
    return (
        <img src={props.image} alt={props.alt} className="sunicon col-2 img-fluid"></img>
    )
}