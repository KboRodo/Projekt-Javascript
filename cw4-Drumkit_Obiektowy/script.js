import Drum from './Drum.js'
import Chanel from './Chanel.js'

document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#recordBtn').addEventListener('click', onRecordBtnClick)
document.querySelector('#playBtn').addEventListener('click', onPlayBtnClick)
document.querySelector('#playAllBtn').addEventListener('click', onPlayAllBtnClick)

const chanelSelectors = document.querySelectorAll('.chanelSelector')

const chanel1 = new Chanel()
const chanel2 = new Chanel()
const chanel3 = new Chanel()
const chanel4 = new Chanel()

let currentChanel

chanelSelectors.forEach(button => {
  button.addEventListener('click', selectChanel)
})

function onPlayAllBtnClick () {
  chanel1.playSounds()
  chanel2.playSounds()
  chanel3.playSounds()
  chanel4.playSounds()
}

function selectChanel (ev) {
  switch (ev.target.id) {
    case 'recordChanel1':
      currentChanel = chanel1
      break
    case 'recordChanel2':
      currentChanel = chanel2
      break
    case 'recordChanel3':
      currentChanel = chanel3
      break
    case 'recordChanel4':
      currentChanel = chanel4
      break
  }
}

function onKeyPress (ev) {
  let soundName
  switch (ev.code) {
    case 'KeyA':
      soundName = 'clap'
      break
    case 'KeyS':
      soundName = 'cowbell'
      break
    case 'KeyD':
      soundName = 'hihat'
      break
    case 'KeyF':
      soundName = 'kick'
      break
    case 'KeyG':
      soundName = 'openhat'
      break
    case 'KeyH':
      soundName = 'perc'
      break
    case 'KeyJ':
      soundName = 'snare808'
      break
    case 'KeyK':
      soundName = 'snareAnalog'
      break
    case 'KeyL':
      soundName = 'tom'
      break
  }
  if (soundName) {
    currentChanel.addSound(new Drum(soundName))
    currentChanel.playNewest()
  }
}

function onRecordBtnClick () {
  currentChanel.startRecording()
}
function onPlayBtnClick () {
  currentChanel.playSounds()
}
