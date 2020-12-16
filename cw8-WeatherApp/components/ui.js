class UI {
  constructor (container) {
    this.container = this.getCardContainer(container)
  }

  getCardContainer (container) {
    return document.querySelector(container)
  }

  createCard (card) {
    const htmlCard = document.createElement('div')
    htmlCard.classList.add('card')
    const htmlCity = document.createElement('h1')
    const htmlTemperature = document.createElement('p')
    // const htmlWeather = document.createElement('h4') DODAC POZNIEJ
    const htmlRemoveBtn = document.createElement('button')

    htmlCity.innerHTML = card.City
    htmlTemperature.innerHTML = card.Temperature
    htmlRemoveBtn.innerHTML = 'Usuń'

    htmlCard.appendChild(htmlCity)
    htmlCard.appendChild(htmlTemperature)
    htmlCard.appendChild(htmlRemoveBtn)
    return htmlCard
  }

  addCard (card) {
    const htmlCard = this.createCard(card)
    console.log('container', this.notesContainer)
    this.container.appendChild(htmlCard)
  }
}

export default UI
