import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { FaSearch } from "react-icons/fa";
import "../SearchBar.css";



const SearchBar = () => {
    const { setCity, fetchWeather } = useContext(WeatherContext);
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input.trim() !== "") {
            setCity(input.trim());
            fetchWeather(input.trim(), "metric"); // ✅ Calls fetchWeather correctly
            setInput("");
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter city name..."
            />
            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;
