import Stopwatch from './stopwatch.js'

document.querySelector('#startBtn').addEventListener('click', startGame)
document.querySelector('#gameArea').style.display = 'none'

const gameTime = new Stopwatch('timer')// czas gry

function startGame () {
  document.querySelector('#startScreen').style.display = 'none'// ukryj startScreen
  document.querySelector('#gameArea').style.display = 'block' // pokaz gameArea
  gameTime.start()
}