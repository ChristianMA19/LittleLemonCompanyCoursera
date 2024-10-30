import React, { useState } from "react";
import "./Services.css";
import Nav from "./Nav";

const Services = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numDiners, setNumDiners] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine date and time into a single datetime string
    const datetime = `${date}T${time}`;

    // Prepare the data to send
    const data = {
      datetime: datetime,
      numberPeoples: numDiners,
    };

    try {
      const response = await fetch("https://retoolapi.dev/z32E66/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      setDate("");
      setTime("");
      setNumDiners(1);
      // Handle success (e.g., show a confirmation message)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
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
