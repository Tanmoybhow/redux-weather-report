import {
    CITY_NAME,
  CURRENT_DATA_SUCCESS,
  FORECAST_DATA_SUCCESS,
  WEATHER_DATA_ERROR,
  WEATHER_DATA_PENDING,
} from "../../constants/waetherConstants";

import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_API_KEY;
console.log(api_key);

const weatherDataPending = () => {
  return {
    type: WEATHER_DATA_PENDING,
  };
};

const currentDataSuccess = (data) => {
  return {
    type: CURRENT_DATA_SUCCESS,
    payload: data,
  };
};

const forecastDataSuccess = (data) => {
  return {
    type: FORECAST_DATA_SUCCESS,
    payload: data,
  };
};

const weatherDataError = (error) => {
  return {
    type: WEATHER_DATA_ERROR,
    payload: error,
  };
};

const cityName = (city)=>{
    return {
        type:CITY_NAME,
        payload:city
    }
}

const fetchWeatherData =  (city) => {
  return async (dispatch) => {
    dispatch(weatherDataPending())
    try{
    const currentResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
    );
    dispatch(currentDataSuccess(currentResponse.data))

    const forecastResponse = await axios.get(
      `https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`,
    );
    dispatch(forecastDataSuccess(forecastResponse.data))
   }catch(error){
    dispatch(weatherDataError(error.message));
   }
    
  };
};

export {
  weatherDataPending,
  currentDataSuccess,
  forecastDataSuccess,
  weatherDataError,
  fetchWeatherData,
  cityName,
};
