import Card from './components/card.js'
import Cards from './components/cards.js'

document.querySelector('#addCityButton').addEventListener('click', addCity)
const cityCards = new Cards('#cardArea')
cityCards.loadCardsFromLocalStorage()

function addCity () {
  document.querySelector('#cityName').value
    ? cityCards.addCard(new Card(document.querySelector('#cityName').value))
    : alert('Musisz podać nazwę miasta')
}
