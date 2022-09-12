import { createContext, useState, useEffect } from "react";
import axios from 'axios';
export const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {

    
    const [citys, setCity] = useState([]);
    const cityAxios = async(city) => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},tr&APPID=193dd9980c47dc0ee0d884d0118696e0&units=metric&lang=tr`)
        console.log("city",res.data)
        setCity([res.data, ...citys])
    }

    const weatherCityPush = () => {
        const localKeys = Object.keys(localStorage);
        console.log(localKeys)
        localKeys.map((item) => (item !== "userAuth" && cityAxios(item)))
        //setKeys( [JSON.parse(localStorage.getItem(item)), ...keys, ])
    };

    useEffect(() => {
        weatherCityPush()
    }, []);

    const values = {
        citys, setCity
    };

    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    );
};

export default WeatherContext;
