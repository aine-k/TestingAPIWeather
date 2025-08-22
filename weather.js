async function getWeather() {
    const response = await fetch("localhost:8080/api/hello?");
    
    weatherOBJ = await response.json();

    console.log(weatherOBJ.current);
    console.log(weatherOBJ.current.temp_c);

    para = document.getElementById("weather");
    para.innerText = "the temperature in Athlone is now: " + weatherOBJ.current.temp_c;
}