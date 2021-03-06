window.addEventListener('deviceorientation', onDeviceMove)
const startingScreen = document.querySelector('#startScreen')
const endingScreen = document.querySelectorAll('#endScreen')
const gameArea = document.querySelector('#gameArea')
document.querySelector('#startBtn').addEventListener('click', startGame)

endingScreen.display = 'none'
startingScreen.display = 'block'
gameArea.display = 'none'

let speedX, speedY
let posX = 0
let posY = 0
let holeX = 0
let holeY = 0
const czas = Date.now()

const ball = document.querySelector('#ball1')
const hole = document.querySelector('#hole1')
// funkcja gry
function startGame () {
  setStartPositions()
  window.addEventListener('deviceorientation', onDeviceMove)
  gameArea.style.display = 'flex'
  startingScreen.style.display = 'none'
  console.log('start')
}
function setStartPositions () {
  console.log('dziura', hole)
  holeX = Math.floor(Math.random() * window.innerWidth)
  holeY = Math.floor(Math.random() * window.innerHeight)
  posX = Math.floor(Math.random() * window.innerWidth)
  posY = Math.floor(Math.random() * window.innerHeight)
  ball.style.left = posX + 'px'
  ball.style.top = posY + 'px'
  hole.style.left = holeX + 'px'
  hole.style.top = holeY + 'px'
  console.log(holeX, holeY)
}
// funckja zmiany polozenia kuli
function onDeviceMove (ev) {
  console.log(Math.abs(posY, holeY), Math.abs(posX, holeX))
  speedX = ev.gamma / 45
  speedY = ev.beta / 45
  if (posX + speedX < window.innerWidth - 50 && posX + speedX > 0) { // ograniczenia kulki
    posX += speedX
    ball.style.left = posX + 'px'
  }
  if (posY + speedY < window.innerHeight - 50 && posY + speedY > 0) {
    posY += speedY
    ball.style.top = posY + 'px'
  }
  if (Math.abs((posY - holeY)) < 5 && Math.abs((posX - holeX)) < 5) { // sprawdzanie czy pilka znajduje sie w dziurze
    console.log('koniec')
    endGame()
  }
}
function endGame () {
  window.removeEventListener('deviceorientation', onDeviceMove)
  console.log('endgame')
  gameArea.display = 'none'
  endingScreen.display = 'block'
  console.log(((Date.now() - czas) / 60), 'sekund')
}
