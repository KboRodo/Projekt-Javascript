class Stopwatch {
  constructor (displayLocation) {
    this.display = document.querySelector('#' + displayLocation)
    this.startTime = 0
    this.elapsedTime = 0
    this.timerInterval = 0
  }

  timeToString (time) {
    console.log('timeToString', time)
    const diffInHrs = this.time / 3600000
    const hh = Math.floor(diffInHrs)

    const diffInMin = (diffInHrs - hh) * 60
    const mm = Math.floor(diffInMin)

    const diffInSec = (diffInMin - mm) * 60
    const ss = Math.floor(diffInSec)

    const diffInMs = (diffInSec - ss) * 100
    const ms = Math.floor(diffInMs)

    const formattedMM = mm.toString().padStart(2, '0')
    const formattedSS = ss.toString().padStart(2, '0')
    const formattedMS = ms.toString().padStart(2, '0')

    console.log(`${formattedMM}:${formattedSS}:${formattedMS}`)
    return `${formattedMM}:${formattedSS}:${formattedMS}`
  }

  displayTime (txt) {
    // this.display.innerHTML = 'test'
  }

  start () { // funkcja nie przekazuje rzeczy
    this.startTime = Date.now() - this.elapsedTime
    this.timerInterval = setInterval(
      function printTime () {
        this.elapsedTime = Date.now() - this.startTime
        Stopwatch.prototype.displayTime(Stopwatch.prototype.timeToString(this.elapsedTime))
      },
      10)
  }

  pause () {
    clearInterval(this.timerInterval)
  }

  reset () {
    this.clearInterval(this.timerInterval)
    this.displayTime('00:00:00')
    this.elapsedTime = 0
  }
}

export default Stopwatch
