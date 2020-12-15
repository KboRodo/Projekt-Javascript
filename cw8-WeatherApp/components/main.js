console.log('dziala kurwa')

fetch('pro.openweathermap.org/data/2.5/forecast/hourly?q=Berlin&appid=a716d799350bb9cf4a69c6c0becaeb66')
  .then(console.log(Response.json))
