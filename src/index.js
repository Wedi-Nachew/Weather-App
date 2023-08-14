import "./style.css";
import { format, isToday } from "date-fns";
import rainDrop from "./icons/rain-drop-svgrepo-com.svg";
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
    // renderDailyWeatherForecastForsevenDays(forecastWeather);
    // renderHourlyWeatherForecast(forecastWeather);
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
        location.nextElementSibling.textContent = format(
            new Date(current.last_updated),
            "PPPP"
        );
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
        while (hourlyWeatherForcast.firstChild) {
            hourlyWeatherForcast.removeChild(hourlyWeatherForcast.firstChild);
        }
        future.forecastday[0].hour.forEach((hour) => {
            const mainContainer = document.createElement("div");
            const time = document.createElement("p");
            const predicatedTempIcon = document.createElement("img");
            const predicatedTemp = document.createElement("p");
            const subContainer = document.createElement("div");
            const rainDropIcon = document.createElement("img");
            const rainingProbablity = document.createElement("p");
            const path =
                hour.condition.icon.match(/\w+(?=.\d+.png$)/) +
                "/" +
                hour.condition.icon.match(/\d+.png$/);

            time.textContent = format(new Date(hour.time), "h aa");
            predicatedTempIcon.src = `weather_icons/${path}`;
            predicatedTemp.textContent = hour.temp_c + " ᵒC";
            subContainer.className = "hourly-chance-of-rain";
            rainDropIcon.src = rainDrop;
            rainingProbablity.textContent = hour.chance_of_rain + "%";

            subContainer.appendChild(rainDropIcon);
            subContainer.appendChild(rainingProbablity);
            mainContainer.appendChild(time);
            mainContainer.appendChild(predicatedTempIcon);
            mainContainer.appendChild(predicatedTemp);
            mainContainer.appendChild(subContainer);
            hourlyWeatherForcast.appendChild(mainContainer);
        });
    };
};
const renderDailyWeatherForecastForsevenDays = (future) => {
    const thisWeekForecast = document.querySelector(".this-week-forecast");
    while (thisWeekForecast.firstChild) {
        thisWeekForecast.removeChild(thisWeekForecast.firstChild);
    }
    future.forecastday.forEach((day) => {
        const mainContainer = document.createElement("div");
        const dayName = document.createElement("p");
        const subContainer = document.createElement("div");
        const rainDropIcon = document.createElement("img");
        const rainingProbablity = document.createElement("p");
        const predicatedTempIcon = document.createElement("img");
        const predicatedMinMaxTemp = document.createElement("p");
        const path =
            day.day.condition.icon.match(/\w+(?=.\d+.png$)/) +
            "/" +
            day.day.condition.icon.match(/\d+.png$/);

        isToday(new Date(day.date))
            ? (dayName.textContent = "Today")
            : (dayName.textContent = format(new Date(day.date), "EEEE"));

        subContainer.className = "daily-chance-of-rain";
        rainDropIcon.src = rainDrop;
        rainingProbablity.textContent = day.day.daily_chance_of_rain + "%";
        predicatedTempIcon.src = `weather_icons/${path}`;
        predicatedMinMaxTemp.textContent =
            day.day.mintemp_c + " ᵒC" + " / " + day.day.maxtemp_c + " ᵒC";

        subContainer.appendChild(rainDropIcon);
        subContainer.appendChild(rainingProbablity);
        mainContainer.appendChild(dayName);
        mainContainer.appendChild(subContainer);
        mainContainer.appendChild(predicatedTempIcon);
        mainContainer.appendChild(predicatedMinMaxTemp);
        thisWeekForecast.appendChild(mainContainer);
    });
};
