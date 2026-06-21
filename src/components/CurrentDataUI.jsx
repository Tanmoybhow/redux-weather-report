import React from "react";
import { useSelector } from "react-redux";
import { FaWind } from "react-icons/fa";
import { RiContrastDrop2Fill } from "react-icons/ri";
import Sun from "./weatherIcon/Sun";
import { weatherComponents } from "../constants/weatherIconMapping";

const CurrentDataUI = () => {
  const currentData = useSelector((state) => state.weatherReducer.currentData);
  console.log(currentData);
  return (
    <div className="w-full flex flex-col items-center">
      <h1>
        {currentData?.name}, {currentData?.sys.country}
      </h1>
      {/* <img
        src={`https://openweathermap.org/img/wn/${currentData?.weather[0].icon}@2x.png`}
        alt=""
        className=""
      /> */}
      <div className="my-4">
      {weatherComponents[currentData?.weather[0].icon]}
      </div>
      <p className="text-5xl font-bold">
        {(currentData?.main.temp - 273.15).toFixed(1)}° C
      </p>
      {/* <p>Feel like: {(currentData?.main.feels_like -273.15).toFixed(1)}° C</p> */}
      <p className="my-4">
        {currentData?.weather[0].description[0].toUpperCase() +
          currentData?.weather[0].description.slice(1)}
      </p>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaWind />
          {(currentData?.wind.speed * 3.6).toFixed(1)} km/h
        </div>

        <div className="flex items-center gap-2">
          <RiContrastDrop2Fill />
          {currentData?.main.humidity}%
        </div>

        <div className="flex items-center gap-1">
          <p>Real Feel:</p> 
          {(currentData?.main.feels_like -273.15).toFixed(1)}° C
        </div>
      </div>
    </div>
  );
};

export default CurrentDataUI;
// https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png
