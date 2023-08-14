import "./style.css";

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

    console.log(forecastWeather.forecastday[0].hour);
    // renderWeatherInfo(currentWeather, forecastWeather, locationDetails);
};
// city = prompt("Enter city name: ");
getCurrentWeather("paris");
const renderWeatherInfo = () => {
    const renderCurrentWeatherInfo = (current, future, locationInfo) => {
        const wrapper = document.querySelector(".wrapper");
        const currentWeatherBoard = wrapper.querySelector(".current-weather");
        const location = currentWeatherBoard.querySelector(".location");
        const weatherDescription = currentWeatherBoard.querySelector("div h2");
        const tempAtTheMoment = currentWeatherBoard.querySelector(
            ".current-weather-icon"
        );

        const path =
            current.condition.icon.match(/\w+(?=.\d+.png$)/) +
            "/" +
            current.condition.icon.match(/\d+.png$/);

        location.lastElementChild.textContent =
            locationInfo.name + ", " + locationInfo.country;
        location.nextElementSibling.textContent = current.last_updated;
        tempAtTheMoment.firstElementChild.src = `weather_icons/${path}`;
        tempAtTheMoment.lastElementChild.textContent = current.temp_c + " ᵒC";
        weatherDescription.textContent = current.condition.text;
        weatherDescription.nextElementSibling.firstElementChild.textContent =
            current.feelslike_c + " ᵒC";
        weatherDescription.nextElementSibling.nextElementSibling.textContent =
            future.forecastday[0].day.mintemp_c +
            " ᵒC" +
            " / " +
            future.forecastday[0].day.maxtemp_c +
            " ᵒC";
    };
    const renderHourlyWeatherForecast = (future) => {
        const hourlyWeatherForcast = document.querySelector(
            ".hourly-weather-forecast"
        );
        const hourlyWeatherForcastBoards = Array.from(
            hourlyWeatherForcast.children
        );

        hourlyWeatherForcastBoards.forEach((div) => {
            console.log();
        });
    };
};
const renderHourlyWeatherForecast = (future) => {
    const hourlyWeatherForcast = document.querySelector(
        ".hourly-weather-forecast"
    );
    const hourlyWeatherForcastBoards = Array.from(
        hourlyWeatherForcast.children
    );

    hourlyWeatherForcastBoards.forEach((div) => {
        console.log();
    });
};
