import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import TransformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';


import './styles.css';

import {
    SUN
} from './../../constants/weathers';


class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        
    }   
   
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
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
                    <CircularProgress size={50}/>
                }
             </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}
export default WeatherLocation;