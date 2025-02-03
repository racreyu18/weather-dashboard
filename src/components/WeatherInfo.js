import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherInfo = () => {
    const { weatherData, forecastData, unit, toggleUnit } = useContext(WeatherContext);

    if (!weatherData) return <p>Loading weather...</p>;

    return (
        <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <p><strong>{weatherData.weather[0].description}</strong></p>
            <p>{weatherData.main.temp}°{unit === "metric" ? "C" : "F"}</p>
            <p>💧 Humidity: {weatherData.main.humidity}%</p>
            <p>🌬️ Wind: {weatherData.wind.speed} {unit === "metric" ? "m/s" : "mph"}</p>

            <button onClick={toggleUnit}>
                Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
            </button>

            {forecastData && (
                <div className="forecast-container">
                    <h3>5-Day Forecast</h3>
                    <div className="forecast">
                        {forecastData.list.filter((_, index) => index % 8 === 0).map((day, index) => (
                            <div key={index} className="forecast-item">
                                <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                                <p>{day.main.temp}°{unit === "metric" ? "C" : "F"}</p>
                                <p>{day.weather[0].description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherInfo;


