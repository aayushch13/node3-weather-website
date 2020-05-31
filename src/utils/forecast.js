const request = require('request')

const forecast = (latitude, longitude, callback) => {
 
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=05acbe26b4ddd06fab8ce8a96855c2a9&units=metric'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            
            callback(undefined,body.weather[0].main)
        }
    })
}

module.exports = forecast

//response.body.weather[0].main