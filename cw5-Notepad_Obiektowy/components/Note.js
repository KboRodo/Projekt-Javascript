class Note {
  constructor (title, content, color = 'red', pinned) {
    this.title = title
    this.content = content
    this.color = color
    this.pinned = pinned
    this.createdDate = new Date(Date.now())
    this.id = '' + Date.now()
  }

  pinNote () {
    this.pinned = true
  }

  unpinNote () {
    this.pinned = false
  }
}

export default Note
