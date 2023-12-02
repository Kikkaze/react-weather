import React from "react";

export default function FormattedDate2 (props) {
    let day = props.date.getDate();
    if (day < 10) {
        day= `0${day}`;
    }
    let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    return (
        <div>{day} {month} {year}</div>
    )
}