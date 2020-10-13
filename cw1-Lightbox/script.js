const images = document.querySelectorAll('.grid img')
const lightbox = document.querySelector('.lightbox')
const firstImg = document.querySelector('.grid img')

const lastImg = indexImages()// ostatnie zdjecie
const prev = document.querySelector('#prev')// przycisk poprzednie zdjecie
const next = document.querySelector('#next')// przycisk nastepne zdjecie
const close = document.querySelector('#close')// przycisk zamykanie lightboxa
let prevEl// nastepny element danego zdjecia
let nextEl// poprzedni element danego zjecia

close.addEventListener('click', hideLightbox)// zamykanie lighboxa
function hideLightbox () {
  lightbox.classList.remove('visible')
}

function indexImages () {
  var i
  for (let index = 0; index < images.length; index++) {
    const img = images[index]
    i = index
    img.addEventListener('click', showLightbox)
  }
  return images[i]
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
  nextEl ? nextEl.click() : firstImg.click()
})

prev.addEventListener('click', function () {
  console.log('prev-', prevEl)
  hideLightbox()
  prevEl ? prevEl.click() : lastImg.click()
})
