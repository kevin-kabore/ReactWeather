//npm Install axios and require
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3db8d7ab93aff27090e5f6ad91e4e81a&units=imperial'

// Api key
// 3db8d7ab93aff27090e5f6ad91e4e81a

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){

      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp
      }
    }, function(err){
      throw new Error('Unable to fetch weather for that location.')
    });
  }
}
