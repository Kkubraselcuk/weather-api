import weather from "./weather.png";
import { useNavigate } from "react-router-dom";

const CityComponent  =(props) => {
    const navigate = useNavigate();
    const goDetailPage = (activeCity) => {
        navigate(`./${activeCity}`, { replace: true });
    }

    return (
        <>
            <div id="cityComp">
                {props.activeCity.map((item) => (
                    <div key={item.id} className="weather">
                        <h1>{item.name}</h1>
                        <p><img src={weather} alt="weather"/> {item.main.temp}°C</p>
                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" />
                        <p>{item.weather[0].description}</p>
                        <button className="weatherDetail" onClick={() => goDetailPage(item.name)}>Detay Göster</button>
                        
                    </div>
                ))}
            </div>
        </>
    )
};
export default CityComponent;