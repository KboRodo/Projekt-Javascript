const lsKey = 'notes'
// 1. zapisywanie notatki i tablicy notatek w localStorage
function saveNote (note) {
  notes.push(note)
  localStorage.setItem(lsKey, JSON.stringify(notes))
}
// notatka: title, content, colour, pinned, createDate
const notes = []

const note = {
  title: '',
  content: '',
  colour: '#ff1280',
  pinned: false,
  createDate: ''
}

// 3. modyfkowanie struktury htmla-ładowanie po otwarciu strony/dodaniu nowej notatki
document.querySelector('#shownotes').addEventListener('click', showNotes)
function showNotes () {
  const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsKey))
  console.log(notesFromLocalStorage)

  const mappedNotes = notesFromLocalStorage.map(note => {
    note.createDate = new Date(note.createDate)
    return note
  })

  const notesContainer = document.querySelector('main')
  // usuwanie starych kontenerow przez zaladowaniem nowych
  while (notesContainer.firstChild) {
    notesContainer.removeChild(notesContainer.lastChild)
  }

  // drugi sposób
  for (const note of mappedNotes) {
    // console.log(note.createDate.toLocaleString());
    const htmlNote = document.createElement('section')
    const htmlTitle = document.createElement('h1')
    const htmlContent = document.createElement('p')
    const htmlDate = document.createElement('h4')
    const htmlRemoveBtn = document.createElement('button')
    const htmlPinBtn = document.createElement('button')

    htmlTitle.innerHTML = note.title
    htmlContent.innerHTML = note.content
    htmlDate.innerHTML = note.createDate.toLocaleString()
    htmlRemoveBtn.innerHTML = 'usuń'
    htmlPinBtn.innerHTML = 'przypnij'

    htmlRemoveBtn.addEventListener('click', removeNote)
    htmlPinBtn.addEventListener('click', pinnedNote)

    htmlNote.classList.add('note')
    htmlNote.appendChild(htmlTitle)
    htmlNote.appendChild(htmlContent)
    htmlNote.appendChild(htmlDate)
    htmlNote.appendChild(htmlRemoveBtn)
    htmlNote.appendChild(htmlPinBtn)

    notesContainer.appendChild(htmlNote)
  }
}

function removeNote (event) {
  event.target.parentNode.remove()
  const elementDate = event.target.parentNode.querySelector('h4').innerHTML
  const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsKey))

  let testDate
  notes.length = 0
  const newNotes = []

  notesFromLocalStorage.map(note => {
    notes.push(note)
  })

  notes.forEach(note => {
    testDate = new Date(note.createDate).toLocaleString()

    if (elementDate !== testDate) {
      if (newNotes.includes(note) === false) {
        newNotes.push(note)
      }
    }
    console.log('nn notes after loop:', newNotes)
    localStorage.removeItem(lsKey)
    localStorage.setItem(lsKey, JSON.stringify(newNotes))
  })
}
// usuwanie elementu ze struktury html
// notesContainer.removeChild()

// 4. pobieranie danych z formularzy-tworzenie nowej notataki
document.querySelector('#noteAdd').addEventListener('click', onNewNote)
// tworzy i zwraca nową notatke z zwartoscia podaną w formularzach
function onNewNote () {
  const title = document.querySelector('#noteTitle').value
  const content = document.querySelector('#noteContent').value
  console.log(title, content)
  const newNote = Object.assign({}, note)
  newNote.title = title
  newNote.content = content
  newNote.createDate = new Date()
  saveNote(newNote)
}
// przypinanie/odpinanie notatki
function pinnedNote (event) {
  const elementDate = event.target.parentNode.querySelector('h4').innerHTML
  const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsKey))

  let testDate
  notes.length = 0

  notesFromLocalStorage.map(note => {
    notes.push(note)
  })

  notes.forEach(note => {
    testDate = new Date(note.createDate).toLocaleString()

    if (elementDate === testDate) {
      note.pinned ? note.pinned = false : note.pinned = true
    }
    localStorage.removeItem(lsKey)
    localStorage.setItem(lsKey, JSON.stringify(notes))
  })
}
