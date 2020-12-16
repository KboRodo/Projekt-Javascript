const myKey = 'e323aa96ab8e4e0fa7d363a94e2561db'
// pro.openweathermap.org/data/2.5/forecast/hourly?q=berlin&appid=5dca6fbf67b9b338071b08fb15025213
class Card {
  constructor (cityName) {
    this.City = cityName
    this.Temperature = '000'
    this.id = '' + Date.now()
  }

  fetchData () {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${this.City},&key=${myKey}&lang=pl`)
      .then(response => response.json())
      .then(response => {
        console.log(response.data[0].max_temp)
        this.Temperature = JSON.parse(response.data[0].max_temp)
      })
  }
}

export default Card
