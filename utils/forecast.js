const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/17ec94c78d7bd2c8566f6c8c35f1c9d8/' + longitude + ',' + latitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log('Unable to connect to weather service');
        } else if (response.body.error) {
            console.log('Unable to fetch location')
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`)
        }
    })
}


module.exports = forecast