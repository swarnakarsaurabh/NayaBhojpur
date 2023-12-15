document.addEventListener("DOMContentLoaded", function() {
  const about = document.getElementById("about");

  // Function to calculate the luminance of a color
  function calculateLuminance(color) {
    const rgb = color.match(/\d+/g).map(Number);
    return 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
  }

  // Function to set the text color based on background luminance
  function setTextColor() {
    const bgColor = window.getComputedStyle(about).backgroundColor;
    const luminance = calculateLuminance(bgColor);

    // Choose a contrasting text color
    const textColor = luminance > 128 ? "#000" : "#fff";

    aboutSection.style.color = textColor;
  }

  // Initial call to set text color
  setTextColor();

  // Update text color when the window is resized (optional)
  window.addEventListener("resize", setTextColor);
});





// const apiKey = '4eefe05a10e1ac8b0b5cb8486dcf60da';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


// const villageLocation = '25.5901672,84.1610003';


// function getWeather() {
//   $.ajax({
//     url: `${apiUrl}?q=${villageLocation}&appid=${apiKey}&units=metric`,
//     method: 'GET',
//     success: function (data) {
//       displayWeather(data);
//     },
//     error: function (error) {
//       console.error('Error fetching weather data:', error.statusText);
//       $('#weather-info').html('<p>Error fetching weather data</p>');
//     },
//   });
// }


// function displayWeather(data) {
//   const weatherInfo = `
//     <p>Temperature: ${data.main.temp} °C</p>
//     <p>Condition: ${data.weather[0].description}</p>
//     <p>Humidity: ${data.main.humidity}%</p>
//     <p>Wind Speed: ${data.wind.speed} m/s</p>
//   `;

//   $('#weather-info').html(weatherInfo);
// }


// $(document).ready(function () {
//   getWeather();
// });







