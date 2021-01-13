// import Stopwatch from './components/stopwatch.js'
import Gameboard from './components/canvas.js'
import Hole from './components/Hole.js'

document.querySelector('#startBtn').addEventListener('click', startGame)
document.querySelector('#gameArea').style.display = 'none'

// tworzenie canvasu
var gameboard = new Gameboard('canvas', window.innerWidth, window.innerHeight)
var holeArray = new Array()
// const gameTime = new Stopwatch('timer')// czas gry

function startGame () {
  document.querySelector('#startScreen').style.display = 'none'// ukryj startScreen
  document.querySelector('#gameArea').style.display = 'block' // pokaz gameArea
  addHoles(document.querySelector('#holes').value - 1)
  spawnHoles()
  // gameTime.start()
}

// tworzenie dziur na planszy
function addHoles (numberOfHoles) {
  let posX, posY, radius

  for (let i = 0; i < numberOfHoles; i++) {
    // tworzenie 'fałszywych dziur'
    if (numberOfHoles > 1) {
      radius = Math.floor(Math.random() * (50 - 20)) + 20
      posX = Math.floor(Math.random() * ((window.innerWidth - radius + 10) - (radius + 10))) + (radius + 10)
      posY = Math.floor(Math.random() * ((window.innerHeight - radius + 10) - (radius + 10))) + (radius + 10)
      holeArray.push(new Hole(posX, posY, radius))
    }
    console.log(holeArray)
  }
}

//wyswietlanie dziur na planszy
function spawnHoles () {
  holeArray.forEach(function (hole) {
    gameboard.addHole(hole.posX, hole.posY, hole.radius)
  })
}
