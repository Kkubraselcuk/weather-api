import React, { useState, useEffect } from 'react';
import withLoading from '../hoc/withLoading';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './Detail.scss';
import weather from "../weather.png";
import wind from "../ruzgar.png";
import weather_app from "../weather-app.png";

const Detail = (props) => {
    const { cityName } = useParams();
    const [cityDetail, setCityDetail] = useState({});
    const [cityDetailMain, setCityDetailMain] = useState({});
    const [cityDetailWind, setCityDetailWind] = useState({});
    const [cityDetailCase, setCityDetailCase] = useState({});
    
    
    const fetchCity = async () => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},tr&APPID=193dd9980c47dc0ee0d884d0118696e0&units=metric&lang=tr`)
            setCityDetail(res.data);
            setCityDetailMain(res.data.main);
            setCityDetailWind(res.data.wind);
            setCityDetailCase(res.data.weather[0]);
            props.setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCity();
    }, []);

    return (
        <>
            <div id="DetailComp">
                <div id="CityDetailComp">
                    <h1><img src={weather_app} alt="weather" id="weather_app_icon"/> {cityDetail.name}</h1>
                    <p><img src={weather} alt="weather" /> {cityDetailMain.temp}°C</p>
                    <p>{cityDetailCase.description}</p>
                    <p>Min - Max Sıcaklık {cityDetailMain.temp_min}°C - {cityDetailMain.temp_max}°C</p>
                    <p>Nem : {cityDetailMain.humidity}</p>
                    <p>Basınç : {cityDetailMain.pressure}</p>
                    <p><img src={wind} alt="weather" /> Rüzgar Hızı : {cityDetailWind.speed}</p>
                </div>
            </div>
        </>
    );
};

export default withLoading(Detail);