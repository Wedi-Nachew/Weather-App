import { format } from "date-fns";
import rainDrop from "./icons/rain-drop-svgrepo-com.svg";
export const renderHourlyWeatherForecast = (future) => {
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
