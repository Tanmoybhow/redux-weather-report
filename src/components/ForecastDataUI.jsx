import React from "react";
import { useSelector } from "react-redux";

const ForecastDataUI = () => {
  const data = useSelector((state) => state.weatherReducer.forecastData);
  console.log(data?.list);
  return (
    <div className="w-full my-3 mt-6 ">
      <h1 className="mb-4">Next few hours weather update</h1>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 w-[600px] overflow-hidden">
          {data?.list?.slice(2, 6).map((item) => {
            return <WeatherCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const WeatherCard = ({ item }) => {
  return (
    <div className="w-[100px] bg-gray-900/20 flex flex-col items-center justify-center rounded-2xl p-4">
      <p>
        {new Date(item.dt_txt).toLocaleTimeString("en-US", {
          hour: "numeric",
          hour12: true,
        })}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
        className="w-[100px]"
      />
      <p className="text-[12px] text-center">{item.weather[0].description}</p>
      <h1 className="text-[15px] font-bold">
        {(item.main.temp - 273).toFixed(1)}° C
      </h1>

      <hr />
    </div>
  );
};

export default ForecastDataUI;
