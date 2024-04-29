import { useEffect, useState } from "react";
import { getWeather } from "../apis/WeatherAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCloud,
  faCloudSun,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

function Weather() {
  let [weatherData, setWeatherData] = useState({
    PTY: '',
    SKY: '',
    T1H: {fcstValue: '00'},
  });

  useEffect(() => {
    getWeather().then((data) => {
      setWeatherData(data);
    });
  }, []);

  return (
    <div className="px-10 py-5 min-h-20 border-b place-content-center">
      {weatherData ? (
        <div className="flex gap-5 justify-between">
          <div className="flex gap-3">
            <div className="w-16 h-12 place-content-center text-5xl">
              {(() => {
                switch (weatherData.SKY.fcstValue) {
                  case "1": //맑음
                    return <FontAwesomeIcon icon={faSun} />;
                  case "3": //구름많음
                    return <FontAwesomeIcon icon={faCloudSun} />;
                  case "4": //흐림
                    return <FontAwesomeIcon icon={faCloud} />;
                  default:
                    return <FontAwesomeIcon icon={faSpinner} />;
                }
              })()}
            </div>
            <div className="font-bold text-xl place-content-center">{weatherData.T1H.fcstValue}°C</div>
          </div>
          <div className="w-16 h-12 text-right font-semibold">
            <h2>
              {(() => {
                switch (weatherData.SKY.fcstValue) {
                  case "1": //맑음
                    return "맑음";
                  case "3": //구름많음
                    return "구름";
                  case "4": //흐림
                    return "흐림";
                  default:
                    return "Loading";
                }
              })()}
            </h2>
            <h2 className="truncate">{`${weatherData.SKY.fcstTime?.slice(
              0,
              2
            )}:${weatherData.SKY.fcstTime?.slice(2)}`}</h2>
          </div>
        </div>
      ) : (
        <h1>Weather Man~</h1>
      )}
    </div>
  );
}

export default Weather;
