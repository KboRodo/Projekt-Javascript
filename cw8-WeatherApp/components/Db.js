class Db {
  constructor () {
    this.cardsLSKey = 'cards'
  }

  saveCards (cards) {
    localStorage.setItem(this.cardsLSKey, JSON.stringify(cards))
  }

  getCards () {
    return JSON.parse(localStorage.getItem(this.cardsLSKey))
  }
}
export default Db
