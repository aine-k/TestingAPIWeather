async function getWeather() {
  const url = "http://localhost:8080/api/hello?";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.text();
    console.log(result);
    content = document.getElementById("weather")
    content.innerText = result;
  } catch (error) {
    console.error(error.message);
  }
}