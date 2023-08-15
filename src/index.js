import "./style.css";
import clearSky from "./icons/clear-sky.jpg";
import cloudy from "./icons/cloudy.jpg";
import partlyCloud from "./icons/partly-cloud.jpg";
import rainy from "./icons/rain.jpg";
import stormyRain from "./icons/stormy-rain.jpg";
import { renderDailyWeatherForecastForsevenDays } from "./daily_weather_forecast";
import { renderCurrentWeatherInfo } from "./current_weather";
import { renderHourlyWeatherForecast } from "./hourly_weather_forecast";
import { provideExtraInfo } from "./side_bar_notes";
// key=75d0fc888d5f466b885144654231108
// "ᵒC"

const getCurrentWeather = async (city = "Seattle") => {
    const forecastWeatherResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=75d0fc888d5f466b885144654231108&q=${city}&days=7&aqi=no&alerts=no`,
        { mode: "cors" }
    );

    const parsedForecastWeather = await forecastWeatherResponse.json();
    setWeatherDescribingBackground(
        parsedForecastWeather.current.condition.text
    );
    const currentWeather = parsedForecastWeather.current;
    const forecastWeather = parsedForecastWeather.forecast;
    const locationDetails = parsedForecastWeather.location;
    // console.log(/clear/i.test(currentWeather.condition.text));
    setWeatherDescribingBackground(currentWeather.condition.text);
    renderCurrentWeatherInfo(currentWeather, forecastWeather, locationDetails);
    provideExtraInfo(currentWeather, forecastWeather, locationDetails);
    renderHourlyWeatherForecast(forecastWeather);
    renderDailyWeatherForecastForsevenDays(forecastWeather);
};

getCurrentWeather("denver");

const getUserSearchLocation = () => {
    const searchIcon = document.querySelector(".magnifying-glass");
    searchIcon.addEventListener("click", () => {
        getCurrentWeather(searchIcon.previousElementSibling.value);
        searchIcon.previousElementSibling.value = "";
    });
};
getUserSearchLocation();
const setWeatherDescribingBackground = (condition) => {
    const currentWeather = document.querySelector(".current-weather");
    if (/rain/i.test(condition) && /storm/i.test(condition)) {
        currentWeather.style.cssText = `background-image: url(${stormyRain})`;
        // } else if (/cloud/i.test(condition) && /partly/i.test(condition)) {
        //     currentWeather.style.cssText = `background-image: url(${partlyCloud})`;
        // } else if (/clear/i.test(condition) || /sunny/i.test(condition)) {
        //     currentWeather.style.cssText = `background-image: url(${clearSky})`;
    } else if (/cloud/i.test(condition) || /overcast/i.test(condition)) {
        currentWeather.style.cssText = `background-image: url(${cloudy})`;
    } else if (/rain/i.test(condition)) {
        currentWeather.style.cssText = `background-image: url(${rainy})`;
    } else {
        currentWeather.style.cssText = `background-image: url(${partlyCloud})`;
    }
};
