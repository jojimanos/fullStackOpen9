import React, { useState } from "react";
import { createNewEntry } from "../services/services";
import styles from "../styles/errorClasses.module.css";
import WeatherInput from "./WeatherInput";
import VisibilityInput from "./VisibilityInput";

// interface EntryFormProps {}

const EntryForm = () => {
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const submitNewEntry = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newEntry = {
      date: date,
      visibility: visibility,
      weather: weather,
      comment: comment,
    };

    createNewEntry(newEntry, setError);
    setDate("");
    setVisibility("");
    setWeather("");
    setComment("");
    setTimeout(() => setError(""), 5000);
  };

  return (
    <div>
      <h3>Submit new entry</h3>
      <h3 className={styles.axiosError}>{error}</h3>
      <form onSubmit={submitNewEntry}>
        <WeatherInput weather={weather} setWeather={setWeather} />
        <VisibilityInput
          visibility={visibility}
          setVisibility={setVisibility}
        />
        <div>
          <label>Date: </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </div>
        <hr />
        <div>
          <label>Comment: </label>
          <textarea
            id="visibility"
            rows={3}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
        </div>
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EntryForm;
