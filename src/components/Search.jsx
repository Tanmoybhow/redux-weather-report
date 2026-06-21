import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cityName, fetchWeatherData } from "../redux/actions/weatherAction";

const Search = () => {
    const city=useSelector(state=> state.weatherReducer.city);
    const dispatch = useDispatch();
    const handleSearch = (e)=>{
         dispatch(cityName(e.target.value))
    }

    const searchBtn = ()=>{
        dispatch(fetchWeatherData(city))
    }
  return (
    <>
    <div className="w-full flex flex-col items-center my-5">
      <div className="join">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search City Name" value={city} className="outline-0 rounded" onChange={handleSearch}/>
        </label>

        <button className="btn btn-accent join-item" onClick={searchBtn}>Search</button>
      </div>
      </div>
    </>
  );
};

export default Search;
