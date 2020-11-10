import Notes from './components/Notes.js'
import Note from './components/Note.js'

document.querySelector('#shownotes').addEventListener('click', showNotes)
document.querySelector('#noteAdd').addEventListener('click', addNote)

const notePad = new Notes('main')// tworzenie przestrzeni notatnika
notePad.loadFromLocalStorage()
function addNote () {
  const noteTitle = document.querySelector('#noteTitle').value
  const noteContent = document.querySelector('#noteContent').value
  const noteColor = document.querySelector('#noteColor').value
  notePad.addNote(new Note(noteTitle, noteContent, noteColor))
}

function showNotes () {

}
