class Stopwatch {
  constructor (displayLocation) {
    this.display = document.querySelector('#' + displayLocation)
    this.running = false
    this.timeStart = 0
  }

  startStopwatch () {
    this.timeStart = Date.now
  }

  displayTime () {
  }
}

export default Stopwatch
