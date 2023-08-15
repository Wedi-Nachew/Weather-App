import { format } from "date-fns";
export const provideExtraInfo = (current, future, location) => {
    const sideBarContent = document.querySelector(".side-bar-content");
    const cityName = sideBarContent.querySelector(".city-name");
    const countryName = sideBarContent.querySelector(".country-name");
    const windSpeed = sideBarContent.querySelector(".wind-speed");
    const uvIndex = sideBarContent.querySelector(".uv-index");
    const humidity = sideBarContent.querySelector(".humidity");
    const sunRise = sideBarContent.querySelector(".sunrise");
    const sunSet = sideBarContent.querySelector(".sunset");
    const timeZone = sideBarContent.querySelector(".time-zone");
    const latitude = sideBarContent.querySelector(".latitude");
    const longitude = sideBarContent.querySelector(".longitude");

    cityName.textContent = location.name;
    countryName.textContent = location.country;
    windSpeed.textContent = current.wind_kph + " km/h ";
    uvIndex.textContent = current.uv;
    humidity.textContent = current.humidity + "%";
    sunRise.textContent = future.forecastday[0].astro.sunrise;
    sunSet.textContent = future.forecastday[0].astro.sunset;
    timeZone.textContent = location.tz_id;
    latitude.textContent = location.lat + "ᵒ N";
    longitude.textContent = location.lon + "ᵒ E";
};
