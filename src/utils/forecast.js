const request = require('request')

const forecast = (latitude,longitude,callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=9b0e56ba9005f380a6dded6d81bab645&query='+latitude+','+longitude+'&units=f'

   request({url: url, json: true},(error,{body}) => {
       if(error){
          callback('Unable to connect to weather service',undefined)
       }else if(body.error){
          callback('Unable to find location',undefined)
       }else{         
          callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.feelslike + ' degress out.' + 'Visibility: ' + body.current.visibility)
       }
   })
}

module.exports = forecast