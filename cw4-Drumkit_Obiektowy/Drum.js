function Drum (SoundId) {
  this.SoundId = SoundId
  this.soundDate = Date.now()

  this.Test = () => {
    console.log('działa')
  }

  this.playSound = () => {
    const SoundObj = document.querySelector('#' + SoundId)
    SoundObj.play()
  }
}

export default Drum
