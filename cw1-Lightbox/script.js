const images = document.querySelectorAll('.grid img')
const lightbox = document.querySelector('.lightbox')
const prev = document.querySelector('#prev')// przycisk poprzednie zdjecie
const next = document.querySelector('#next')// przycisk nastepne zdjecie
const close = document.querySelector('#close')// przycisk zamykanie lightboxa
var prevEl// nastepny element
var nextEl// poprzedni element

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
  console.log('next', nextEl)
  hideLightbox()
  nextEl.click()
})

prev.addEventListener('click', function () {
  console.log('prev-', prevEl)
  console.log('next', nextEl)
  hideLightbox()
  prev.click()
})
