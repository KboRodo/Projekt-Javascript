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
    const htmlMaxTemperature = document.createElement('p')
    const htmlMinTemperature = document.createElement('p')
    const htmlIcon = document.createElement('img')
    const htmlDescription = document.createElement('p')
    const htmlRemoveBtn = document.createElement('button')

    htmlCity.innerHTML = card.City
    htmlMaxTemperature.innerHTML = card.maxTemperature
    htmlMinTemperature.innerHTML = card.minTemperature
    htmlDescription.innerHTML = card.Description
    htmlIcon.src = `https://www.weatherbit.io/static/img/icons/${card.Icon}.png`
    htmlRemoveBtn.innerHTML = 'Usuń'

    htmlCard.appendChild(htmlCity)
    htmlCard.appendChild(htmlMaxTemperature)
    htmlCard.appendChild(htmlMinTemperature)
    htmlCard.appendChild(htmlIcon)
    htmlCard.appendChild(htmlDescription)
    htmlCard.appendChild(htmlRemoveBtn)
    return htmlCard
  }

  addCard (card) {
    const htmlCard = this.createCard(card)
    this.container.appendChild(htmlCard)
  }
}

export default UI
