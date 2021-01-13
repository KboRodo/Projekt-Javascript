class Gameboard {
  constructor (canvasLocation, width, height) {
    console.log(width, height)
    this.canvas = document.querySelector(canvasLocation)
    this.c = this.canvas.getContext('2d')
    this.c.strokeSyle = '#FF0000'
    this.canvas.width = width
    this.canvas.height = height
  }

  addHole (positionX, positionY, radius) {
    this.c.beginPath()
    this.c.arc(positionX, positionY, radius, 0, Math.PI * 2, false)
    this.c.stroke()
    this.c.fill()
    console.log(`created hole at ${positionX},${positionY}`)
  }
}

export default Gameboard
