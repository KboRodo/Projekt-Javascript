
document.querySelector('#startBtn').addEventListener('click', startGame)
document.querySelector('#gameArea').style.display = 'none'


function startGame () {
  document.querySelector('#startScreen').style.display = 'none'// ukryj startScreen
  document.querySelector('#gameArea').style.display = 'block' // pokaz gameArea
}

function stopwatch () {
}
