import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const Forecast = ({ city }) => {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        if (!city) return;

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then((res) => setForecast(res.data.list.slice(0, 5)))
            .catch((err) => console.error("Error fetching forecast", err));
    }, [city]);

    return (
        <div>
            <h2>5-Day Forecast</h2>
            {forecast ? (
                <ul>
                    {forecast.map((day, index) => (
                        <li key={index}>{day.dt_txt} - {day.main.temp}°C</li>
                    ))}
                </ul>
            ) : (
                <p>Loading forecast...</p>
            )}
        </div>
    );
};

export default Forecast;
