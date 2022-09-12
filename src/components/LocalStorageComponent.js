import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import weather from "./weather.png";
const LocalStorageComponent = () => {

    const { citys, setCity } = useContext(WeatherContext);
    return (
        <>
            <div id="localStorageComp">
                {citys.map((item, index) => {
                    console.log(index)
                    if (index < 3) {
                        //console.log(item)
                        localStorage.setItem(item.name, JSON.stringify(item))
                        return (
                            <ul key={item.id}>
                                <li>{item.name}</li>
                                <li><img src={weather} alt="weather"/>{item.main.temp}°C</li>
                                <li><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" /></li>
                                <li>{item.weather[0].description}</li>
                            </ul>
                        )

                    }
                    else {
                        citys.pop() // her zaman 4. eleman silinip max 3 eleman saklanacak
                        localStorage.removeItem(item.name) // her zaman 4. eleman local storage'den silinip max 3 eleman saklanacak
                    }
                })}
            </div>
        </>
    )
};
export default LocalStorageComponent;