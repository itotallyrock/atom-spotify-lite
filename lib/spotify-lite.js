'use babel'

import SpotifyLiteView from './spotify-lite-view'

const { commands } = atom

export default {

  view: null,

  activate() {
    this.view = new SpotifyLiteView()
    this.view.getElement().addEventListener('mousedown', function (event) {
      commands.dispatch(this, 'spotify-status:toggle-pause')
    })
  },

  deactivate() {
    this.view.destroy()
  },

  consumeStatusbar(statusBar) {
    statusBar.addRightTile({
      item: this.view,
      priority: 0
    })
  },

  consumeSpotifyPlayer(player) {
    player.on('track-change', this.view.updateTrack.bind(this.view))
    player.on('end', () => {
      player.off(this.view.updateTrack.bind(this.updateTrack))
      this.view.hide()
      player.once('ready', () => {
        this.view.show()
        player.on('track-change', this.view.updateTrack.bind(this.view))
      })
    })
    player.on('error', (error) => {
      console.error('player error', error)
      this.deactivate()
    })
  }
}