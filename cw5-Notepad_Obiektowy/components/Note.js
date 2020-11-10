class Note {
  constructor (title, content, color = 'red', pinned = false) {
    this.title = title
    this.content = content
    this.color = color
    this.pinned = pinned
    this.createdDate = new Date(Date.now())
    this.id = '' + Date.now()
  }
}

export default Note
