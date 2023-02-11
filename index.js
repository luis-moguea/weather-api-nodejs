const request = require("request")
const dotenv = require("dotenv").config()

const cities = ["Venezuela,ve", "Colombia,co", "peru,pe"]

let i
for(i=0; i < cities.length; i++){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}}&units=metric&appid=${process.env.API_KEY}`
    
    request(url, (err, res, body) => {
        const data = JSON.parse(body)
        return data.main
    })
}

