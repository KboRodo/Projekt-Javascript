class Db {
  constructor () {
    this.notesLSKey = 'notes'
  }

  saveNotes (notes) {
    localStorage.setItem(this.notesLSKey, notes)
  }

  getNotes () {
    return JSON.parse(localStorage.getItem(this.notesLSKey))
  }
}

export default Db
