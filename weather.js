async function getWeather() {
  const url = "http://localhost:8080/api/hello?";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.text(); //do not look for .JSON() the API is actually returning text in the response body
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}