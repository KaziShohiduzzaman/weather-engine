document.getElementById("spinner").style.display = "none";
const loadWeather = () => {
    const weatherInput = document.getElementById('weather-input');
    const weatherText = weatherInput.value;
    document.getElementById("spinner").style.display = "block";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherText}&appid=9ce679e3ecbcf43be8d0ed2f6b39ce0a`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("spinner").style.display = "none";
            displayWeather(data)
            weatherInput.value = '';

        })

}
const displayWeather = data => {
    const inTemp = Math.round((data.main.temp) - 273.15)
    const displayData = document.getElementById('display-data');
    displayData.textContent = '';
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div class="weather-status text-white text-center">
            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1>${data.name},${data.sys.country}</h1>
            <h3><span>${inTemp}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
            <h1 class="lead">Humidity: ${data.main.humidity}</h1>
        </div>
    `
    displayData.appendChild(newDiv);
}
