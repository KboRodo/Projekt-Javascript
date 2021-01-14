/* eslint-disable no-array-constructor */
// import Stopwatch from './components/stopwatch.js'
import Gameboard from './components/canvas.js'
import Hole from './components/Hole.js'

document.querySelector('#startBtn').addEventListener('click', startGame)
document.querySelector('#gameWon').style.display = 'none'// ukryj startScreen
document.querySelector('#gameLost').style.display = 'none'// ukryj startScreen
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

// zmienne do stopera
let time = 0
let isOn = false
let timeInterval
const timeDisplay = document.querySelector('#timer')
let timeElapsed

function stopWatch () {
  if (!isOn) {
    isOn = !isOn
    time = 0
    timeInterval = setInterval(startTimer, 10)
  } else {
    time = 0
    isOn = !isOn
  }
}
const startTimer = () => {
  time++
  timeDisplay.textContent = (time / 100).toFixed(2)
}

function startGame () {
  document.querySelector('#startScreen').style.display = 'none'// ukryj startScreen
  document.querySelector('#gameArea').style.display = 'block' // pokaz gameArea
  addHoles(document.querySelector('#holes').value)
  spawnHoles()
  animate()
  stopWatch()
  stopWatch()
}
function restartGame () {
  document.querySelector('#gameWon').style.display = 'none'
  document.querySelector('#gameLost').style.display = 'none'
  document.querySelector('#startScreen').style.display = 'block'
}

function endGame (isWon) {
  timeElapsed = (time / 100).toFixed(2)
  document.querySelector('#gameArea').style.display = 'none'
  if (isWon) {
    console.log('gra wygrana')
    document.querySelector('#gameWon').style.display = 'block'// ukryj startScreen
    document.querySelector('#gameTime').textContent = `Twój czas to: ${timeElapsed}`
    document.querySelector('#tryAgain').addEventListener('click', restartGame)
  } else {
    console.log('gra przergana')
    document.querySelector('#gameLost').style.display = 'block'// ukryj startScreen
    document.querySelector('#gameTime').textContent = `Twój czas to: ${timeElapsed}`
    document.querySelector('#tryAgain').addEventListener('click', restartGame)
  }
  clearInterval(timeInterval)
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
      if (hole.isWin === false) {
        endGame(false)
      } else {
        endGame(true)
      }
    }
  })
}

// tworzenie dziur na planszy
function addHoles (numberOfHoles) {
  let posX, posY, radius

  radius = Math.floor(Math.random() * (50 - 20)) + 20
  posX = Math.floor(Math.random() * ((window.innerWidth - radius + 10) - (radius + 10))) + (radius + 10)
  posY = Math.floor(Math.random() * ((window.innerHeight - radius + 10) - (radius + 10))) + (radius + 10)
  holeArray.push(new Hole(posX, posY, radius, true))

  if (numberOfHoles > 1) {
    for (let i = 0; i < numberOfHoles - 1; i++) {
      radius = Math.floor(Math.random() * (50 - 20)) + 20
      posX = Math.floor(Math.random() * ((window.innerWidth - radius + 10) - (radius + 10))) + (radius + 10)
      posY = Math.floor(Math.random() * ((window.innerHeight - radius + 10) - (radius + 10))) + (radius + 10)
      holeArray.push(new Hole(posX, posY, radius, false))
    }
  }
}

// wyswietlanie dziur na planszy
function spawnHoles () {
  holeArray.forEach(function (hole) {
    if (hole.isWin === false) {
      gameboard.addHole(hole.posX, hole.posY, hole.radius, '#FF0000')
    } else {
      gameboard.addHole(hole.posX, hole.posY, hole.radius, '#00D77F')
    }
  })
}
