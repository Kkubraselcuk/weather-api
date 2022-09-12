import React, { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import Login from '../Login';
import LoginContext from '../../context/LoginContext';
import WeatherContext from '../../context/WeatherContext';

import InputComponent from '../InputComponent';
import CityComponent from '../CityComponent';
import LocalStorageComponent from '../LocalStorageComponent';
import './Home.scss';

const Home = (props) => {
    const { user } = useContext(LoginContext);
    const { citys, setCity } = useContext(WeatherContext);

    const inputEl = useRef(null);
    const [activeCity, setActiveCity] = useState([]);

    const weatherCity = async () => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputEl.current.value},tr&APPID=193dd9980c47dc0ee0d884d0118696e0&units=metric&lang=tr`)
        setActiveCity([res.data]); 
        setCity([res.data, ...citys]) 
        return ;
    };

    
    useEffect(() => {
        if(user.isAuth === true) {
            localStorage.setItem('userAuth', true);
        }
    })
    return (
        <>
            {!user.isAuth ? (
                <Login />
            ) : (
                <>
                    <div id="main">
                        <InputComponent inputEl={inputEl} weatherCity = {weatherCity}/>
                        <CityComponent activeCity={activeCity}/>
                    </div>
                    <LocalStorageComponent/>
                    
                </>
            )}
            
        </>
    )
}

export default Home;