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
  createDate: new Date()
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

  // drugi sposób
  for (const note of mappedNotes) {
    // console.log(note.createDate.toLocaleString());
    const htmlNote = document.createElement('section')
    const htmlTitle = document.createElement('h1')
    const htmlContent = document.createElement('p')
    const htmlDate = document.createElement('h4')
    const htmlRemoveBtn = document.createElement('button')

    htmlTitle.innerHTML = note.title
    htmlContent.innerHTML = note.content
    htmlDate.innerHTML = note.createDate.toLocaleString()
    htmlRemoveBtn.innerHTML = 'usuń'

    htmlRemoveBtn.addEventListener('click', removeNote())

    htmlNote.classList.add('note')
    htmlNote.appendChild(htmlTitle)
    htmlNote.appendChild(htmlContent)
    htmlNote.appendChild(htmlDate)
    htmlNote.appendChild(htmlRemoveBtn)

    notesContainer.appendChild(htmlNote)
  }
}
function removeNote () {

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
  saveNote(newNote)
}
