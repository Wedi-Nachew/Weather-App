import "./style.css";
// key=75d0fc888d5f466b885144654231108
// "ᵒC"
const getCurrentWeather = async (city = "Seattle") => {
    const [currentWeatherResponse, forecastWeatherResponse] = await Promise.all(
        [
            fetch(
                `https://api.weatherapi.com/v1/current.json?key=75d0fc888d5f466b885144654231108&q=${city}&aqi=no`,
                { mode: "cors" }
            ),
            fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=75d0fc888d5f466b885144654231108&q=${city}&days=7&aqi=no&alerts=no`,
                { mode: "cors" }
            ),
        ]
    );

    const [currentWeather, forecastWeather] = await Promise.all([
        currentWeatherResponse.json(),
        forecastWeatherResponse.json(),
    ]);
    const currentCondition = currentWeather.location;

    console.log(currentCondition);
    // renderWeatherInfo(currentWeather);
};
// city = prompt("Enter city name: ");
getCurrentWeather("denver");
const renderWeatherInfo = (currentWeather) => {
    const wrapper = document.querySelector(".wrapper");
    const currentWeatherBoard = wrapper.querySelector(".current-weather");

    currentWeatherBoard.children[0].children[0];
};
// renderWeatherInfo();
