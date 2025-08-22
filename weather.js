async function getWeather() {
    const response = await fetch("http://localhost:8080/api/hello?");
    
    responseOBJ = await response.json();

    console.log(responseOBJ);

    para = document.getElementById("weather");
    para.innerText = responseOBJ;
}