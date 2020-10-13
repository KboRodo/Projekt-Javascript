const images = document.querySelectorAll('.grid img')
const lightbox = document.querySelector('.lightbox')

const prev = document.querySelector('#prev')// przycisk poprzednie zdjecie
const next = document.querySelector('#next')// przycisk nastepne zdjecie
const close = document.querySelector('#close')// przycisk zamykanie lightboxa

let prevEl// nastepny element danego zdjecia
let nextEl// poprzedni element danego zjecia

close.addEventListener('click', hideLightbox)// zamykanie lighboxa
function hideLightbox () {
  lightbox.classList.remove('visible')
}

for (let index = 0; index < images.length; index++) {
  const img = images[index]
  img.addEventListener('click', showLightbox)
}

function showLightbox (ev) { // otwieranie lightboxa
  const lightboxImg = document.querySelector('.lightbox img')
  lightboxImg.src = ev.target.src
  lightbox.classList.add('visible')
  prevEl = ev.target.previousElementSibling
  nextEl = ev.target.nextElementSibling
}

next.addEventListener('click', function () { // przwijanie zdjec do przodu
  hideLightbox()
  nextEl ? nextEl.click() : images[0].click()// sprawdzenie czy obecne zdjecie jest ostatnim  w kolejnosci, jesli tak to nastepuje zawiniecie
})

prev.addEventListener('click', function () {
  hideLightbox()
  prevEl ? prevEl.click() : images[images.length - 1].click()// sprawdzenie czy obecne zdjecie jest pierwszym  w kolejnosci, jesli tak to nastepuje zawiniecie
})
