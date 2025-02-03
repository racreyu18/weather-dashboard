import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import ErrorMessage from "./components/ErrorMessage";
import "./styles.css";

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <div className="app-container">
          <h1>Weather Dashboard</h1>
          <SearchBar />
          <ErrorMessage />
          <WeatherInfo />
        </div>
      </WeatherProvider>
    </QueryClientProvider>
  );
};

export default App;
