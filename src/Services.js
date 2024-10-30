// Services.js
import React, { useState } from "react";
import "./Services.css";
import Nav from "./Nav";

const Services = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numDiners, setNumDiners] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(`Date: ${date}, Time: ${time}, Number of Diners: ${numDiners}`);
  };

  return (
    <>
      <Nav />
      <div className="services-container">
        <h1>Reserve Your Table</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Select Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="numDiners">Number of Diners:</label>
            <select
              id="numDiners"
              value={numDiners}
              onChange={(e) => setNumDiners(e.target.value)}>
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Reserve</button>
        </form>
      </div>
    </>
  );
};

export default Services;
