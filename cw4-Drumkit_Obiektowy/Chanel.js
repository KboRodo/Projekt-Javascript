
function Chanel () {
  this.Tracks = []

  this.addSound = (sound) => {
    this.Tracks.push(sound)
  }

  this.StartRecording = () => {
    this.recordStartDate = Date.now()
  }

  this.playSounds = () =>
    this.Tracks.forEach(sound => {
      setTimeout(
        () => {
          sound.playSound()
        },
        1000
      )
    }
    )
}

export default Chanel
