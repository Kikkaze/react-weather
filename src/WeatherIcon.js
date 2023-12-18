import React from "react";
import brokenCloudsDay from "./images/broken-clouds-day.png";
import brokenCloudsNight from "./images/broken-clouds-night.png";
import clearSkyDay from "./images/clear-sky-day.png";
import clearSkyNight from "./images/clear-sky-night.png";
import fewCloudsDay from "./images/few-clouds-day.png";
import fewCloudsNight from "./images/few-clouds-night.png";
import mistDay from "./images/mist-day.png";
import mistNight from "./images/mist_night.png";
import rainDay from "./images/rain-day.png";
import rainNight from "./images/rain-night.png";
import scatteredCloudsDay from "./images/scattered-clouds-day.png";
import scatteredCloudsNight from "./images/scattered-clouds-night.png";
import showerRainDay from "./images/shower-rain-day.png";
import showerRainNight from "./images/shower-rain-night.png";
import snowDay from "./images/snow-day.png";
import snowNight from "./images/snow-night.png";
import thundersormDay from "./images/thunderstorm-day.png";
import thundersormNight from "./images/thunderstorm-night.png";

export default function WeatherIcon (props) {
    
    if (props.image === "clear-sky-day") {
    return (
        <img src={clearSkyDay} alt={props.alt} width="90"></img>
    )
} else if (props.image === "clear-sky-night") {
    return (
        <img src={clearSkyNight} alt={props.alt} width="90"></img>
    )
    } else if (props.image === "broken-clouds-day") {
        return (
            <img src={brokenCloudsDay} alt={props.alt} width="90"></img>
        )
        } else if (props.image === "broken-clouds-night") {
            return (
                <img src={brokenCloudsNight} alt={props.alt} width="90"></img>
            )
            } else if (props.image === "few-clouds-day") {
                return (
                    <img src={fewCloudsDay} alt={props.alt} width="90"></img>
                )
                } else if (props.image === "few-clouds-night") {
                    return (
                        <img src={fewCloudsNight} alt={props.alt} width="90"></img>
                    )
                    } else if (props.image === "mist-day") {
                        return (
                            <img src={mistDay} alt={props.alt} width="80"></img>
                        )
                        } else if (props.image === "mist-night") {
                            return (
                                <img src={mistNight} alt={props.alt} width="80"></img>
                            )
                            } else if (props.image === "rain-day") {
                                return (
                                    <img src={rainDay} alt={props.alt} width="90"></img>
                                )
                                } else if (props.image === "rain-night") {
                                    return (
                                        <img src={rainNight} alt={props.alt} width="90"></img>
                                    )
                                    } else if (props.image === "scattered-clouds-day") {
                                        return (
                                            <img src={scatteredCloudsDay} alt={props.alt} width="90"></img>
                                        )
                                        } else if (props.image === "scattered-clouds-night") {
                                            return (
                                                <img src={scatteredCloudsNight} alt={props.alt} width="90"></img>
                                            )
                                            } else if (props.image === "shower-rain-day") {
                                                return (
                                                    <img src={showerRainDay} alt={props.alt} width="90"></img>
                                                )
                                                } else if (props.image === "shower-rain-night") {
                                                    return (
                                                        <img src={showerRainNight} alt={props.alt} width="90"></img>
                                                    )
                                                    } else if (props.image === "snow-day") {
                                                        return (
                                                            <img src={snowDay} alt={props.alt} width="90"></img>
                                                        )
                                                        } else if (props.image === "snow-night") {
                                                            return (
                                                                <img src={snowNight} alt={props.alt} width="90"></img>
                                                            )
                                                            } else if (props.image === "thunderstorm-day") {
                                                                return (
                                                                    <img src={thundersormDay} alt={props.alt} width="90"></img>
                                                                )
                                                                } else if (props.image === "thunderstorm-night") {
                                                                    return (
                                                                        <img src={thundersormNight} alt={props.alt} width="90"></img>
                                                                    )
                                                                    }
};