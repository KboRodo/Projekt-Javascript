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

    return htmlNote
  }

  getNote (id) {
    const noteSelector = '#' + id
    this.notesContainer.querySelector(noteSelector)
  }

  addNote (note) {
    const htmlNote = this.createNote(note)
    note.pinned
      ? this.notesContainer.prepend(htmlNote)
      : this.notesContainer.appendChild(htmlNote)
  }

  removeNote (id) {
    const htmlNote = this.getNote(id)
    this.notesContainer.removeChild(htmlNote)
    // usunac  z db
  }
}

export default NotesUI
