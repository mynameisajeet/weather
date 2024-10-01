import React, { useState } from 'react';
import './city.css'; // Importing CSS for styling

const City = ({ setCity }) => {
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value on change
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setCity(inputValue); // Call the function to set the city in App.js
    setInputValue(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="city-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className="city-input"
      />
      <button type="submit" className="city-button">Get Weather</button>
    </form>
  );
};

export default City;
