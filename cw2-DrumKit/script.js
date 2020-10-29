document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#recordBtn').addEventListener('click', onRecordBtnClick)
document.querySelector('#playBtn').addEventListener('click', onPlayBtnClick)
document.querySelector('#playAllBtn').addEventListener('click', onPlayAllBtnClick)
document.querySelector('#clearBtn').addEventListener('click', onClearBtnClick)

document.querySelector('#recordChanel1').addEventListener('click', onRecordChanel1BtnClick)
document.querySelector('#recordChanel2').addEventListener('click', onRecordChanel2BtnClick)
document.querySelector('#recordChanel3').addEventListener('click', onRecordChanel3BtnClick)
document.querySelector('#recordChanel4').addEventListener('click', onRecordChanel4BtnClick)

let recordStartTime
let selectedChanel = 1// obecnie wybrany kanał

function onRecordChanel1BtnClick () {
  selectedChanel = 1
}
function onRecordChanel2BtnClick () {
  selectedChanel = 2
}
function onRecordChanel3BtnClick () {
  selectedChanel = 3
}
function onRecordChanel4BtnClick () {
  selectedChanel = 4
}

const chanel1 = []
const chanel2 = []
const chanel3 = []
const chanel4 = []

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
    const soundTime = Date.now() - recordStartTime
    const soundObj = {
      id: soundName,
      time: soundTime
    }
    switch (selectedChanel) {
      case 1:
        chanel1.push(soundObj)
        playSound(soundName)
        break
      case 2:
        chanel2.push(soundObj)
        playSound(soundName)
        break
      case 3:
        chanel3.push(soundObj)
        playSound(soundName)
        break
      case 4:
        chanel4.push(soundObj)
        playSound(soundName)
        break
    }
  }
}
function onClearBtnClick () {
  switch (selectedChanel) {
    case 1:
      chanel1.length = 0
      console.log('cleared 1')
      break
    case 2:
      chanel2.length = 0
      console.log('cleared 2')
      break
    case 3:
      chanel3.length = 0
      break
    case 4:
      chanel4.length = 0
  }
}

function onRecordBtnClick () {
  recordStartTime = Date.now()
}

function onPlayBtnClick () {
  let recordedSounds = []
  recordedSounds.length = 0
  switch (selectedChanel) {
    case 1:
      recordedSounds = chanel1
      break
    case 2:
      recordedSounds = chanel2
      break
    case 3:
      recordedSounds = chanel3
      break
    case 4:
      recordedSounds = chanel4
      break
  }

  for (let index = 0; index < recordedSounds.length; index++) {
    const soundObj = recordedSounds[index]
    setTimeout(
      () => {
        playSound(soundObj.id)
      },
      soundObj.time
    )
  }
}

function playSound (id) {
  const padId = id + 'Pad'
  const pad = document.getElementById(padId)
  const sound = document.querySelector('#' + id)
  sound.currentTime = 0
  sound.play()
  setTimeout(
    () => {
      pad.classList.remove('active')
    },
    sound.duration
  )
  pad.classList.add('active')
}

function onPlayAllBtnClick () {
  for (let index = 0; index < chanel1.length; index++) {
    const soundObj = chanel1[index]
    setTimeout(
      () => {
        playSound(soundObj.id)
      },
      soundObj.time
    )
  }
  for (let index = 0; index < chanel2.length; index++) {
    const soundObj = chanel2[index]
    setTimeout(
      () => {
        playSound(soundObj.id)
      },
      soundObj.time
    )
  }
  for (let index = 0; index < chanel3.length; index++) {
    const soundObj = chanel3[index]
    setTimeout(
      () => {
        playSound(soundObj.id)
      },
      soundObj.time
    )
  }
  for (let index = 0; index < chanel4.length; index++) {
    const soundObj = chanel4[index]
    setTimeout(
      () => {
        playSound(soundObj.id)
      },
      soundObj.time
    )
  }
}
