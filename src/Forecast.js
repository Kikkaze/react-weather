import React from "react";
import "./Forecast.css";
import sunicon from "./sunicon.png";

export default function Forecast() {
    return (
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

    )
}