import { format } from "date-fns";
export const renderCurrentWeatherInfo = (current, future, locationInfo) => {
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
    tempAtTheMoment.lastElementChild.textContent = current.temp_c + "ᵒ";
    weatherDescription.textContent = current.condition.text;
    weatherDescription.nextElementSibling.firstElementChild.textContent =
        current.feelslike_c + "ᵒ";
    weatherDescription.nextElementSibling.nextElementSibling.textContent =
        future.forecastday[0].day.mintemp_c +
        "ᵒ" +
        " / " +
        future.forecastday[0].day.maxtemp_c +
        "ᵒ";
};
