import React, { useEffect, useState } from "react";
import "./styles/forcast.css"; // CSS for metallic design

const Forecast = ({ weatherData, cityName }) => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Function to update the date and time
  const updateDateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setCurrentDateTime(`${formattedDate} ${formattedTime}`);
  };

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="forecast-container">
      {weatherData ? (
        <div>
          <h2>Weather Forecast for {cityName}</h2>
          <p>{currentDateTime}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Cloudiness: {weatherData.clouds.all}%</p>
          <p>Visibility: {weatherData.visibility / 1000} km</p>
          <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Forecast;
