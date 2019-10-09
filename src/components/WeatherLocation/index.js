import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import TransformWeather from '../../services/transformWeather';
import {api_weather} from '../../constants/api_url';


import './styles.css';

import {
    SUN
} from './../../constants/weathers';


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Grand Bourg",
            data: null,
        };
        console.log("Constructor");
        
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        
    }   
   
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = TransformWeather(data);
            this.setState({
                data: newWeather
            });
        });

      
    }

    render() {
        const { city, data} = this.state;
        return (
             <div className="weatherLocationCont">
                <Location city={city}></Location>
                {
                    data ? 
                    <WeatherData data={data}></WeatherData> :
                    "Cargando..."
                }
             </div>
        );
    }
}


export default WeatherLocation;