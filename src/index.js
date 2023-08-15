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
let unit = "Celsius";
let city = "Seattle";

const getCurrentWeather = async (city) => {
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

    renderCurrentWeatherInfo(
        currentWeather,
        forecastWeather,
        locationDetails,
        unit
    );
    provideExtraInfo(currentWeather, forecastWeather, locationDetails);
    renderHourlyWeatherForecast(forecastWeather, unit);
    renderDailyWeatherForecastForsevenDays(forecastWeather, unit);
};

const getUserSearchLocation = () => {
    const searchIcon = document.querySelector(".magnifying-glass");

    searchIcon.addEventListener("click", () => {
        city = searchIcon.previousElementSibling.value;
        getCurrentWeather(city, unit);
        searchIcon.previousElementSibling.value = "";
    });
};

const setWeatherDescribingBackground = (condition) => {
    const currentWeather = document.querySelector(".current-weather");
    if (/rain/i.test(condition) && /storm/i.test(condition)) {
        currentWeather.style.cssText = `background-image: url(${stormyRain})`;
    } else if (/cloud/i.test(condition) || /overcast/i.test(condition)) {
        currentWeather.style.cssText = `background-image: url(${cloudy})`;
    } else if (/rain/i.test(condition)) {
        currentWeather.style.cssText = `background-image: url(${rainy})`;
    } else {
        currentWeather.style.cssText = `background-image: url(${partlyCloud})`;
    }
};

const changeTempUnit = () => {
    const checkBox = document.querySelector("[type='checkbox']");
    const circularSwitch = document.querySelector(".circular-shape");
    checkBox.checked = false;

    const clickEvents = () => {
        checkBox.addEventListener("click", () => {
            if (checkBox.checked) {
                unit = "Fahrenheit";
            } else {
                unit = "Celsius";
            }
            getCurrentWeather(city, unit);
        });
        circularSwitch.addEventListener("click", () => {
            checkBox.click();
        });
        circularSwitch.nextElementSibling.addEventListener("click", () => {
            checkBox.click();
        });
        circularSwitch.previousElementSibling.addEventListener("click", () => {
            checkBox.click();
        });
    };

    clickEvents();
};

document.addEventListener("DOMContentLoaded", () => {
    getCurrentWeather(city);
    getUserSearchLocation();
    changeTempUnit();
});
