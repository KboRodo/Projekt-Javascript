/* eslint-disable no-array-constructor */
// import Stopwatch from './components/stopwatch.js'
import Gameboard from './components/canvas.js'
import Hole from './components/Hole.js'

document.querySelector('#startBtn').addEventListener('click', startGame)
document.querySelector('#gameArea').style.display = 'none'
window.addEventListener('deviceorientation', moveBall)

// wspolrzedne gracza
let x = 100
let y = 100
let speedX = 0
let speedY = 0

// tworzenie canvasu
var gameboard = new Gameboard('canvas', window.innerWidth, window.innerHeight)
var holeArray = new Array()
// const gameTime = new Stopwatch('timer')// czas gry

function startGame () {
  document.querySelector('#startScreen').style.display = 'none'// ukryj startScreen
  document.querySelector('#gameArea').style.display = 'block' // pokaz gameArea
  addHoles(document.querySelector('#holes').value - 1)
  spawnHoles()
  animate()
  // gameTime.start()
}

function moveBall (e) {
  speedY = e.gamma / 5
  speedX = e.beta / 5
}
// animacja ruchu kuli
function animate () {
  if (x + speedX > 0 + 20 && x + speedX < window.innerWidth - 20) { x += speedX }
  if (y + speedY > 0 + 20 && y + speedY < window.innerHeight - 20) { y += speedY }
  checkColision()
  requestAnimationFrame(animate)
  gameboard.clear()
  gameboard.addBall(x, y, 20)
  spawnHoles()
}

// sprawdzanie kolizji
function checkColision () {
  holeArray.forEach(function (hole) {
    if (hole.posX + hole.radius > x && hole.posX - hole.radius < x && hole.posY + hole.radius > y && hole.posY - hole.radius < y) {
      console.log('colision')
    }
  })
}

// tworzenie dziur na planszy
function addHoles (numberOfHoles) {
  let posX, posY, radius

  for (let i = 0; i < numberOfHoles; i++) {
    if (numberOfHoles > 1) {
      radius = Math.floor(Math.random() * (50 - 20)) + 20
      posX = Math.floor(Math.random() * ((window.innerWidth - radius + 10) - (radius + 10))) + (radius + 10)
      posY = Math.floor(Math.random() * ((window.innerHeight - radius + 10) - (radius + 10))) + (radius + 10)
      holeArray.push(new Hole(posX, posY, radius))
    }
    console.log(holeArray)
  }
}

// wyswietlanie dziur na planszy
function spawnHoles () {
  holeArray.forEach(function (hole) {
    gameboard.addHole(hole.posX, hole.posY, hole.radius)
  })
}
