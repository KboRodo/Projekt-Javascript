window.addEventListener('deviceorientation', onDeviceMove)

const ball = document.querySelector('#ball1')
let speedX = 0
let speedY = 0
let posX = 20
let posY = 20

function onDeviceMove (ev) {
  speedX = ev.gamma / 45
  speedY = ev.beta / 45
  console.log(speedX, speedY)
  moveBall()
}

function moveBall () {
  if (posX + speedX < window.innerWidth - 50 && posX + speedX > 0) { // ograniczenia kulki
    posX += speedX
    ball.style.left = posX + 'px'
  }
  if (posY + speedY < window.innerHeight - 50 && posY + speedY > 0) {
    posY += speedY
    ball.style.top = posY + 'px'
  }
}
