import Sun from "../components/weatherIcon/Sun";
import Moon from "../components/weatherIcon/Moon";
import Cloud from "../components/weatherIcon/Cloud";
import BrokenCloud from "../components/weatherIcon/BrokenCloud";
import Rain from "../components/weatherIcon/Rain";
import SunRain from "../components/weatherIcon/SunRain";
import Thunderstorm from "../components/weatherIcon/Thunderstorm";
import Snow from "../components/weatherIcon/Snow";
import Mist from "../components/weatherIcon/Mist";
import PartlyCloudy from "../components/weatherIcon/PartlyCloudy";

export const weatherComponents = {
  "01d": <Sun />,
  "01n": <Moon />,

  "02d": <PartlyCloudy />,
  "02n": <Cloud />,

  "03d": <Cloud />,
  "03n": <Cloud />,

  "04d": <BrokenCloud />,
  "04n": <BrokenCloud />,

  "09d": <Rain />,
  "09n": <Rain />,

  "10d": <SunRain />,
  "10n": <Rain />,

  "11d": <Thunderstorm />,
  "11n": <Thunderstorm />,

  "13d": <Snow />,
  "13n": <Snow />,

  "50d": <Mist />,
  "50n": <Mist />,
};