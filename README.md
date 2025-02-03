# Weather Dashboard

## Overview
The Weather Dashboard is a React-based application that allows users to check real-time weather data and a 5-day weather forecast for any city. It also provides the ability to switch between Celsius and Fahrenheit for temperature display.

## Features
- 🌦 **Current Weather Data** - Fetches live weather updates from OpenWeatherMap API.
- 📅 **5-Day Forecast** - Displays future weather trends.
- 🌍 **City Search** - Users can enter any city name to fetch weather details.
- 🌡 **Unit Toggle** - Allows users to switch between Celsius and Fahrenheit.
- ⚡ **Optimized Performance** - Uses React Query for data caching and API optimization.
- 🔄 **Auto Refresh** - Weather data updates every 30 seconds.
- ☀️ **Weather Conditions** - Displays weather conditions (e.g., sunny, rainy, cloudy) in both current weather and forecast.

## Technologies Used
- **React** (Frontend UI Framework)
- **React Query** (Data fetching & caching)
- **Axios** (API requests)
- **OpenWeatherMap API** (Weather data source)
- **CSS** (Styling)

## Setup and Installation

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-repo/weather-dashboard.git
 cd weather-dashboard
```

### 2️⃣ Install Dependencies
```sh
 npm install
```

### 3️⃣ Add API Key
Create a `.env` file in the root folder and add your OpenWeather API key:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### 4️⃣ Start the Application
```sh
 npm start
```
This will run the app on `http://localhost:3000`

## File Structure
```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── WeatherInfo.js
│   │   ├── Forecast.js
│   ├── context/
│   │   ├── WeatherContext.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   ├── WeatherDashboard.css
│   ├── .env
├── public/
├── package.json
├── README.md
```

## API Details
This project uses the **OpenWeatherMap API** for fetching data.
- **Current Weather API Endpoint:**
  ```
  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units={unit}
  ```
- **5-Day Forecast API Endpoint:**
  ```
  https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units={unit}
  ```

## Approach
The project is built using React and React Query to optimize API calls and state management. The application provides real-time weather updates, allowing users to search for any city and view its weather conditions along with a 5-day forecast. It also includes a feature to switch between temperature units. The application automatically refreshes weather data every 30 seconds for accurate updates.

---
### 🔥 Enjoy tracking weather updates with the Weather Dashboard! 🚀

