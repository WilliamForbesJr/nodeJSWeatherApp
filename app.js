const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]

if (!location) {
    console.log('Please provide location')
} else {
    geocode(location, (error, {longitude, latitude}) => {
        if (error) {
            return console.log(error)
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}



