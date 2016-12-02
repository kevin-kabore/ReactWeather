var React = require('react');


var About = (props) => {
  return (
    <div>
        <h1 className="text-center page-title">About Component</h1>
        <p>This is an applications that allows users to display find the temperature in different cities. It is built using Javascript & React using JSX. It also consumes the OpenWeatherMap API to gather temperature.</p>

      <p>Here are a few places where you can learn about the project and me:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This is the Javascript Framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
          <li>
            <a href="https://github.com/kevin-kabore/ReactWeather">Github Repository</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/kevinkabore">LinkedIn</a>
          </li>
        </ul>
    </div>
  )
}

module.exports = About;
