import React, { useContext } from 'react';
import '../App.scss';
import weather_app from "./weather-app.png";
import {
    Link
  } from "react-router-dom";
const HeaderComponent = () => {

    return (
        <>
            <div id="headerComp">
                <Link to="/" id="headerLink"><img src={weather_app} alt="weather" />Anasayfa</Link>
            </div>
        </>
    )
};
export default HeaderComponent;