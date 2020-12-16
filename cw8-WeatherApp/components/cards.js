import Db from './DB.js'
import UI from './UI.js'
class Cards {
  constructor (containerSelector) {
    this.CardsArr = []
    this.db = new Db()
    this.UIcards = new UI(containerSelector)
  }

  addCard (card) {
    card.fetchData()
    this.CardsArr.push(card)
    this.db.saveCards(this.CardsArr)
    this.UIcards.addCard(card)
  }

  removeNote (id) {

  }

  getCards () {
    return this.CardsArr
  }

  getCard (id) {
    return this.CardsArr.find(el => el.id === id)
  }

  loadCardsFromLocalStorage () {
    if (this.db.getCards()) {
      this.CardsArr = this.db.getCards()
      this.CardsArr.forEach(card => {
        this.UIcards.addCard(card)
      })
    };
  }
}
export default Cards
