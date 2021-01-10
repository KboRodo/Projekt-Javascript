import Notes from './Notes.js'

class NotesUI {
  constructor (containerSelector) {
    this.notesContainer = this.getNotesContainer(containerSelector)
  }

  getNotesContainer (containerSelector) {
    return document.querySelector(containerSelector)
  }

  createNote (note) {
    const htmlNote = document.createElement('div')
    htmlNote.classList.add('note')
    const htmlTitle = document.createElement('h1')
    const htmlContent = document.createElement('p')
    const htmlDate = document.createElement('h4')
    const htmlRemoveBtn = document.createElement('button')
    const htmlPinBtn = document.createElement('button')

    htmlTitle.innerHTML = note.title
    htmlContent.innerHTML = note.content
    htmlDate.innerHTML = note.createdDate.toLocaleString()
    htmlRemoveBtn.innerHTML = 'Usuń'
    note.pinned ? htmlPinBtn.innerHTML = 'Odepnij' : htmlPinBtn.innerHTML = 'Przypnij'

    htmlNote.appendChild(htmlTitle)
    htmlNote.appendChild(htmlContent)
    htmlNote.appendChild(htmlDate)
    htmlNote.appendChild(htmlRemoveBtn)
    htmlNote.appendChild(htmlPinBtn)
    htmlNote.style.backgroundColor = note.color
    htmlNote.id = note.id
    htmlRemoveBtn.addEventListener('click', NotesUI.prototype.removeNote(note.id))
    return htmlNote
  }

  getNote (id) { // blad  z funkcja z jakiegos powodu nie ma dostepu do kontenera
    const noteSelector = '#' + id
    console.log('getnoteContainer', this.notesContainer)
    const note = this.notesContainer.querySelector(noteSelector)
    return note
  }

  addNote (note) {
    const htmlNote = this.createNote(note)
    console.log('container', this.notesContainer)
    note.pinned
      ? this.notesContainer.prepend(htmlNote)
      : this.notesContainer.appendChild(htmlNote)
  }

  removeNote (id) {
    console.log('remove', this.notesContainer)
    //Notes.prototype.removeNote(id)
    const htmlNote = this.getNote(id)
    this.notesContainer.removeChild(htmlNote)
  }
}

export default NotesUI
