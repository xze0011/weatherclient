import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const getWeather = async () => {
    if (city && country) {
      setLoading(true);
      setError(false);
      setSuccess(false);
      try {
        const res = await axios.get(
          `https://localhost:7241/api/Weather/getWeather?city=${city}&country=${country}`
        );
        const data = res.data;
        if (data) {
          setWeather(data);
          setSuccess(true);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Weather Finder</h1>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Enter Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button style={styles.button} onClick={getWeather} disabled={loading}>
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </div>

      {success && weather && (
        <div style={styles.success}>
          <p>Description: {weather.description}</p>
        </div>
      )}

      {error && <div style={styles.error}>Failed to fetch weather data.</div>}
    </div>
  );
};

// 简单的内联样式对象
const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  success: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#e0f7e9",
    color: "#2e7d32",
    borderRadius: "5px",
  },
  error: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#fdecea",
    color: "#d32f2f",
    borderRadius: "5px",
  },
};

export default Weather;
