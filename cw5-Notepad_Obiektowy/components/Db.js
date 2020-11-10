class Db {
  constructor () {
    this.notesLSKey = 'notes'
  }

  saveNotes (notes) {
    localStorage.setItem(this.notesLSKey, JSON.stringify(notes))
  }

  getNotes () {
    return JSON.parse(localStorage.getItem(this.notesLSKey))
  }
}

export default Db
