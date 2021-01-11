/* eslint-disable no-return-assign */
const myKey = 'e323aa96ab8e4e0fa7d363a94e2561db'
// pro.openweathermap.org/data/2.5/forecast/hourly?q=berlin&appid=5dca6fbf67b9b338071b08fb15025213
class Card {
  constructor (cityName) {
    this.City = cityName
    this.id = '' + Date.now()
    this.maxTemperature = 0
    this.minTemperature = 0
    this.Description = 'abc'
    this.Icon = 'abc.png'
  }

  async fetchData () {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${this.City},&key=${myKey}&lang=pl`)
      .then(response => {
        return response.json()
      }).then(this.assignData.bind(this))
  }

  assignData (JsonData) {
    console.log(JsonData)
    this.City = JsonData.city_name
    this.curTemperature = (JsonData.data[0].max_temp + JsonData.data[0].min_temp / 2).toFixed(1)
    this.maxTemperature = JsonData.data[0].max_temp
    this.minTemperature = JsonData.data[0].min_temp
    this.Description = JsonData.data[0].weather.description
    this.Icon = JsonData.data[0].weather.icon
  }
}

export default Card
