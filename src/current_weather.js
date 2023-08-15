import { format } from "date-fns";
export const renderCurrentWeatherInfo = (
    current,
    future,
    locationInfo,
    unit
) => {
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
    weatherDescription.textContent = current.condition.text;
    tempAtTheMoment.firstElementChild.src = `weather_icons/${path}`;
    unit === "Fahrenheit" ? dataInFahrenheit() : dataInCelsius();

    function dataInCelsius() {
        tempAtTheMoment.lastElementChild.textContent = current.temp_c + "ᵒ";
        weatherDescription.nextElementSibling.firstElementChild.textContent =
            current.feelslike_c + "ᵒ";
        weatherDescription.nextElementSibling.nextElementSibling.textContent =
            future.forecastday[0].day.mintemp_c +
            "ᵒ" +
            " / " +
            future.forecastday[0].day.maxtemp_c +
            "ᵒ";
    }
    function dataInFahrenheit() {
        tempAtTheMoment.lastElementChild.textContent = current.temp_f + "ᵒ";

        weatherDescription.nextElementSibling.firstElementChild.textContent =
            current.feelslike_f + "ᵒ";
        weatherDescription.nextElementSibling.nextElementSibling.textContent =
            future.forecastday[0].day.mintemp_f +
            "ᵒ" +
            " / " +
            future.forecastday[0].day.maxtemp_f +
            "ᵒ";
    }
};
