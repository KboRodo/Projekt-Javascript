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
    return htmlNote
  }

  getNote (id) {
    const noteSelector = '#' + id
    this.notesContainer.querySelector(noteSelector)
  }

  addNote (note) {
    const htmlNote = this.createNote(note)
    this.notesContainer.appendChild(htmlNote)
  }

  removeNote (id) {
    const htmlNote = this.getNote(id)
    this.notesContainer.removeChild(htmlNote)
  }
}

export default NotesUI
