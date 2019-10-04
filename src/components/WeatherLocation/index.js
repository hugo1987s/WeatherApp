import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

const data = {
    temperature: 15,
    weatherState: SUN,
    humidity: 10,
    wind: '140 m/s'
};

class WeatherLocation extends Component {
    render() {
        return (
             <div className="weatherLocationCont">
                <Location city={"Grand Bourg"}></Location>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}


export default WeatherLocation;