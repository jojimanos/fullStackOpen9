import React, { SetStateAction } from "react";

interface WeatherInputProps {
    weather: string
  setWeather: React.Dispatch<SetStateAction<string>>;
}

const WeatherInput = ({ weather, setWeather }: WeatherInputProps) => {
  const weatherValues = ["sunny", "stormy", "windy", "cloudy", "rainy"];

  return (
    <div>
      <label>Weather: </label>
      <fieldset>
        {weatherValues.map((w, i) => (
          <div key={i}>
            <input
              name="weather"
              type="radio"
              value={w}
              onChange={(e) => {
                setWeather(e.target.value);
              }}
              checked={weather === w}
            />
            <label>{w}</label>
          </div>
        ))}
      </fieldset>
      <hr />
    </div>
  );
};

export default WeatherInput;
