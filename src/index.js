import "./style.css";
import { format, isToday } from "date-fns";
import rainDrop from "./icons/rain-drop-svgrepo-com.svg";
import { renderDailyWeatherForecastForsevenDays } from "./daily_weather_forecast";
import { renderCurrentWeatherInfo } from "./current_weather";
import { renderHourlyWeatherForecast } from "./hourly_weather_forecast";
// key=75d0fc888d5f466b885144654231108
// "ᵒC"

const getCurrentWeather = async (city = "Seattle") => {
    const forecastWeatherResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=75d0fc888d5f466b885144654231108&q=${city}&days=7&aqi=no&alerts=no`,
        { mode: "cors" }
    );

    const parsedForecastWeather = await forecastWeatherResponse.json();
    const currentWeather = parsedForecastWeather.current;
    const forecastWeather = parsedForecastWeather.forecast;
    const locationDetails = parsedForecastWeather.location;

    console.log(forecastWeather.forecastday[0]);
    renderDailyWeatherForecastForsevenDays(forecastWeather);
    renderHourlyWeatherForecast(forecastWeather);
    renderCurrentWeatherInfo(currentWeather, forecastWeather, locationDetails);
};
// city = prompt("Enter city name: ");
getCurrentWeather("paris");
