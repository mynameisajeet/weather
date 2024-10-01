import React, { useState, useEffect } from "react";
import City from "./city"; // Import City component
import Forecast from "./forcast"; // Import Forecast component
import './App.css';

const App = () => {
  const [city, setCity] = useState(""); // State to hold the city name
  const [weatherData, setWeatherData] = useState(null); // State to hold weather data

  useEffect(() => {
    if (city) {
      const apiKey = "3d5c602016291b0b666f3b7fc2bdad3b"; // Your OpenWeatherMap API key
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
          );

          // Check if the response is ok (status in the range 200-299)
          if (!response.ok) {
            throw new Error("City not found"); // Handle error if city is invalid
          }

          const data = await response.json(); // Parse the response data
          setWeatherData(data); // Update weather data state
        } catch (error) {
          console.error("Error fetching weather data:", error); // Log any errors
          setWeatherData(null); // Reset weather data if there's an error
        }
      };
      fetchWeatherData(); // Call the function to fetch data
    }
  }, [city]); // Only run effect when city changes

  return (
    <div>
      <City setCity={setCity} /> {/* City input component */}
      <Forecast weatherData={weatherData} cityName={city} /> {/* Forecast component */}
    </div>
  );
};

export default App;
