import { format, isToday } from "date-fns";
import rainDrop from "./icons/rain-drop-svgrepo-com.svg";

export const renderDailyWeatherForecastForsevenDays = (future, unit) => {
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

        unit === "Fahrenheit"
            ? (predicatedMinMaxTemp.textContent =
                  day.day.mintemp_f + "ᵒ " + " / " + day.day.maxtemp_f + "ᵒ")
            : (predicatedMinMaxTemp.textContent =
                  day.day.mintemp_c + "ᵒ " + " / " + day.day.maxtemp_c + "ᵒ");

        subContainer.appendChild(rainDropIcon);
        subContainer.appendChild(rainingProbablity);
        mainContainer.appendChild(dayName);
        mainContainer.appendChild(subContainer);
        mainContainer.appendChild(predicatedTempIcon);
        mainContainer.appendChild(predicatedMinMaxTemp);
        thisWeekForecast.appendChild(mainContainer);
    });
};
