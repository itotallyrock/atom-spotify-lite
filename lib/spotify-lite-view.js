'use babel'

const DEFAULT_ARTIST = 'Unknown Artist'
const DEFAULT_TITLE = 'Unknown Track'

export default class SpotifyLiteView {

  constructor() {
    // Create root element
    this.element = document.createElement('div')
    this.element.classList.add('spotify-lite', 'inline-block')

    // Create song element
    const song = document.createElement('div')
    song.textContent = `${DEFAULT_ARTIST} - ${DEFAULT_TITLE}`
    song.classList.add('song')
    this.element.appendChild(song)
  }

  hide() {
    this.element.classList.add('hide')
  }

  show() {
    this.element.classList.remove('hide')
  }

  updateTrack(track) {
    const song = this.element.querySelector('.song')
    let artist = DEFAULT_ARTIST
    let title = DEFAULT_TITLE
    if (track.artists && track.artists.length > 0) artist = track.artists.join(', ')
    if (track.title && track.title.length > 0) title = track.title
    song.textContent = `${artist} - ${title}`
  }

  // Tear down any state and detach
  destroy() {
    this.element.remove()
  }

  getElement() {
    return this.element
  }

}
