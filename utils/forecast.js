const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/17ec94c78d7bd2c8566f6c8c35f1c9d8/' + longitude + ',' + latitude

    request({ url, json: true }, (error, { body: { error:returnError, daily:{data}, currently } } ) => {
        if (error) {
            console.log('Unable to connect to weather service');
        } else if (returnError) {
            console.log('Unable to fetch location')
        } else {
            callback(undefined, `${data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain`)
        }
    })
}


module.exports = forecast