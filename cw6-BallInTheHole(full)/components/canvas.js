class Gameboard {
  constructor (canvasLocation, width, height) {
    console.log(width, height)
    this.canvas = document.querySelector(canvasLocation)
    this.c = this.canvas.getContext('2d')
    this.canvas.width = width
    this.canvas.height = height
  }

  addHole (positionX, positionY, radius, fill) {
    this.c.beginPath()
    this.c.arc(positionX, positionY, radius, 0, Math.PI * 2, false)
    this.c.closePath()
    this.c.fillStyle = fill
    this.c.fill()
  }

  addBall (positionX, positionY, radius) {
    this.c.fillStyle = 'blue'
    this.c.beginPath()
    this.c.arc(positionX, positionY, radius, 0, Math.PI * 2, false)
    this.c.closePath()
    this.c.fill()
  }

  clear () {
    this.c.clearRect(0, 0, 1920, 1080)
  }
}

export default Gameboard
