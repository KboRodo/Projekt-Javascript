
function Chanel () {
  this.Tracks = [] // tablica w której przechowywane są dzwięki

  this.addSound = (sound) => { // dodanie dzwieku do tablicy
    this.Tracks.push(sound)
  }

  this.startRecording = () => { // rozpoczecie nagrywania
    this.Tracks.length = 0
    this.recordStartDate = Date.now()
  }

  this.playSounds = () => { // odtwarzanie nagranych dzwieków
    this.Tracks.forEach(sound => {
      setTimeout(
        () => {
          sound.playSound()
        },
        sound.soundDate - this.recordStartDate
      )
    }
    )
  }
  this.playNewest = () => { // odtworzenie ostatniego dodanego dziwęku
    this.Tracks[this.Tracks.length - 1].playSound()
  }
}

export default Chanel
