import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWeatherData } from "./redux/actions/weatherAction";
import Search from "./components/Search";
import CurrentDataUI from "./components/CurrentDataUI";
import Loader from "./components/loader";
import ErrorUI from "./components/ErrorUI";
import ForecastDataUI from "./components/ForecastDataUI";

const App = () => {
  const error = useSelector((state) => state.weatherReducer.error);
  console.log(error)
  const isLoading = useSelector((state) => state.weatherReducer.isLoading);
  const city = useSelector((state) => state.weatherReducer.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData(city));
  }, []);
  return (
    <div className="max-w-[400px] w-full bg-white/5 mx-auto my-4 p-4 rounded-2xl relative overflow-hidden">
      <h1 className="text-center">Weather Report</h1>
      <Search />
      {isLoading?<Loader/>:error!=null?<ErrorUI/>:
      <div>
      <CurrentDataUI />
      <ForecastDataUI/>
      </div>
}
    </div>
  );
};

export default App;
