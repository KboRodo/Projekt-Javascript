const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

function Snowflake (x, speedX, speedY) {
  this.x = x
  this.y = 0

  this.speedX = speedX
  this.speedY = speedY

  this.draw = () => {
    c.beginPath()
    c.arc(this.x, this.y, 30, 0, Math.PI * 2, false)
    c.strokeStyle = 'blue'
    c.stroke()
  }

  this.update = () => {
    this.x += this.speedX
    this.y += this.speedY
    if (this.x > innerWidth) {
      this.speedX = -this.speedX
    }
    if (this.y > innerHeight || this.y < 0) {
      this.y = 0
      this.speedY = Math.random() * (6 - 2)
    }
    this.draw()
  }
}

const circleArray = []

for (let i = 0; i < 100; i++) {
  const speedX = Math.random() * (3 - 1)
  const speedY = Math.random() * (6 - 2)
  const x = Math.random() * innerWidth
  circleArray.push(new Snowflake(x, speedX, speedY))
}

function animate () {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()
