import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={WINDY}></WeatherTemperature>
        <WeatherExtraInfo humidity={90} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;