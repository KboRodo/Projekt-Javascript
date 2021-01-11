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
    const htmlCurTemperature = document.createElement('h2')
    const htmlTempRange = document.createElement('p')
    const htmlIcon = document.createElement('img')
    const htmlDescription = document.createElement('p')
    const htmlRemoveBtn = document.createElement('button')

    htmlCity.innerHTML = card.City
    htmlCurTemperature.innerHTML = card.curTemperature + '°C'
    htmlTempRange.innerHTML = card.minTemperature + '°C' + ' / ' + card.maxTemperature + '°C'
    htmlDescription.innerHTML = card.Description
    htmlIcon.src = `https://www.weatherbit.io/static/img/icons/${card.Icon}.png`
    htmlRemoveBtn.classList.add('far')
    htmlRemoveBtn.classList.add('fa-times-circle')

    htmlCard.appendChild(htmlRemoveBtn)
    htmlCard.appendChild(htmlCity)
    htmlCard.appendChild(htmlCurTemperature)
    htmlCard.appendChild(htmlTempRange)
    htmlCard.appendChild(htmlIcon)
    htmlCard.appendChild(htmlDescription)

    return htmlCard
  }

  addCard (card) {
    const htmlCard = this.createCard(card)
    this.container.appendChild(htmlCard)
  }
}

export default UI
