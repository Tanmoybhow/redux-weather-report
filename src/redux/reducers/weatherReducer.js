import { Activity } from "react";
import {
  CITY_NAME,
  CURRENT_DATA_SUCCESS,
  FORECAST_DATA_SUCCESS,
  WEATHER_DATA_ERROR,
  WEATHER_DATA_PENDING,
} from "../../constants/waetherConstants";

const initialData = {
  city:"bolpur",
  isLoading: false,
  currentData: null,
  forecastData: null,
  error: null,
};

export const weatherReducer = (state = initialData, action) => {
  if (action.type === WEATHER_DATA_PENDING) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === CURRENT_DATA_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      error:null,
      currentData: action.payload,
    };
  } else if (action.type === FORECAST_DATA_SUCCESS) {
    return { ...state,
        isLoading: false,
      forecastData: action.payload,
     };
  } else if(action.type === WEATHER_DATA_ERROR){
    return {
        ...state,
        isLoading:false,
        error:action.payload
    }
  }

  else if(action.type === CITY_NAME){
    return {
        ...state,
        city:action.payload
    }
  }
  
  
  
  else {
    return state;
  }
};
