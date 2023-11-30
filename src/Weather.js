import React from "react";
import "./Weather.css";
import sunicon from "./sunicon.png";

export default function Weather () {
    return(
        <div className="Weather">
             <form>
            <div class="row mb-5">
              <div class="col-9">
                <input
                  autofocus="on"
                  type="search"
                  placeholder="Search for a city"
                  className="form-control search-form search-bar"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100 search-button"
                />
              </div>
            </div>
          </form>
            <h1>Milan</h1>
            <div className="d-flex">
                <img src={sunicon} alt="Sun Icon" className="sunicon"></img>
                <span>10°C</span>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>Thursday</li>
                        <li>November 30, 2023</li>
                        <li>Sunny</li>
                    </ul>
                </div>
                <div className="col-6"><ul>
                        <li>Feels like: 10°C</li>
                        <li>Humidity: 40%</li>
                        <li>Wind: 5km/h</li>
                    </ul>
                </div>
            </div>
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

        </div>
    )
};