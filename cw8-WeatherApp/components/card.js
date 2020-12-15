const myKey = 'a716d799350bb9cf4a69c6c0becaeb66'

class Card {
  constructor (cityName) {
    this.City = cityName
    this.Temperature = '000'
  }

  fetchData () {
    Promise((resolve, reject) => {
      fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.City}&appid=${myKey}`)
        .then(response => response.json()
          .then(
            this.Temperature = response.list[0].main.temp
          ))
      resolve('sucess')
    })
  }
}
