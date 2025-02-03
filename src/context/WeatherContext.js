import React, { createContext, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import "../WeatherDashboard.css"; 

const API_KEY = "6f3af5685e369205b3125530c7adfa79";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState(localStorage.getItem("lastCity") || "London");
    const [unit, setUnit] = useState("metric");
    const queryClient = useQueryClient();

    // Fetch current weather
    const fetchWeather = async (city, unit) => {
        const response = await axios.get(
            `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
        );
        return response.data;
    };

    // Fetch 5-day forecast
    const fetchForecast = async (city, unit) => {
        const response = await axios.get(
            `${BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
        );
        return response.data;
    };

    // Weather Query (Auto-Refresh every 30s)
    const weatherQuery = useQuery({
        queryKey: ["weather", city, unit],
        queryFn: () => fetchWeather(city, unit),
        enabled: !!city,
        refetchInterval: 30000, // Poll every 30 seconds
    });

    // Forecast Query (Auto-Refresh every 30s)
    const forecastQuery = useQuery({
        queryKey: ["forecast", city, unit],
        queryFn: () => fetchForecast(city, unit),
        enabled: !!city,
        refetchInterval: 30000, // Poll every 30 seconds
    });

    // Handle city change
    const handleCityChange = (newCity) => {
        if (newCity && newCity !== city) {
            setCity(newCity);
            localStorage.setItem("lastCity", newCity);
            queryClient.invalidateQueries(["weather", newCity, unit]);
            queryClient.invalidateQueries(["forecast", newCity, unit]);
        }
    };

    // Toggle between Celsius and Fahrenheit
    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
        queryClient.invalidateQueries(["weather", city, unit]);
        queryClient.invalidateQueries(["forecast", city, unit]);
    };

    return (
        <WeatherContext.Provider
            value={{
                weatherData: weatherQuery.data,
                forecastData: forecastQuery.data,
                city,
                setCity: handleCityChange,
                weatherError: weatherQuery.error,
                forecastError: forecastQuery.error,
                unit,
                toggleUnit,
                fetchWeather,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherContext, WeatherProvider };
