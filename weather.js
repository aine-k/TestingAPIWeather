async function getWeather() {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?q=athlone&key=236b515d0fcb4702a3f114622252108");
    weatherOBJ = await response.json();
    console.log(weatherOBJ)
}