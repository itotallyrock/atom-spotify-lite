'use babel'

export default class SpotifyLiteView {

  constructor() {
    // Create root element
    this.element = document.createElement('div')
    this.element.classList.add('spotify-lite', 'inline-block')

    // Create song element
    const song = document.createElement('div')
    song.textContent = 'Unknown Artist - Unknown Track'
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
    song.textContent = track.artists.join(', ') + ' - ' + track.title
  }

  // Tear down any state and detach
  destroy() {
    this.element.remove()
  }

  getElement() {
    return this.element
  }

}
