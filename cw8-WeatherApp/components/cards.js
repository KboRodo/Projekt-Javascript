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
    const promises = new Promise((resolve, reject) => {
      setTimeout(() => { resolve('overment') }, 2000)
    })
    promises.then(
      result => this.CardsArr.push(card)
    )
    promises.then(
      result => this.UIcards.addCard(card)
    )
    /*
      .then(this.CardsArr.push(card))
      .then(this.UIcards.addCard(card))
      */
    // this.db.saveCards(this.CardsArr)
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
