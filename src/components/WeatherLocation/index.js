import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Grand Bourg"}></Location>
        <WeatherData></WeatherData>
    </div>

);


export default WeatherLocation;