import "./style.css";
// key=75d0fc888d5f466b885144654231108
const getCurrentWeather = async (city = "Seattle") => {
    const [currentWeatherResponse, forecastWeatherResponse] = await Promise.all(
        [
            fetch(
                `https://api.weatherapi.com/v1/current.json?key=75d0fc888d5f466b885144654231108&q=${city}&aqi=no`,
                { mode: "cors" }
            ),
            fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=75d0fc888d5f466b885144654231108&q=${city}&days=6&aqi=no&alerts=no`,
                { mode: "cors" }
            ),
        ]
    );

    const [currentWeather, forecastWeather] = await Promise.all([
        currentWeatherResponse.json(),
        forecastWeatherResponse.json(),
    ]);

    console.log(currentWeather, forecastWeather);
};
// city = prompt("Enter city name: ");
getCurrentWeather("denver");
