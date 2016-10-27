/* global L */

require('leaflet-easybutton')
const sf = require('sheetify')

sf('leaflet-easybutton', { global: true })

/**
 * Location control button
 * @name locationControl
 * @example
 * var locationControl = sjcLeaflet.locationControl()
 * locationControl.addTo(map)
*/

module.exports = () => {
  const locateButton = L.easyButton({
    id: 'location-control-button',
    states: [{
      stateName: 'locate-me',
      icon: '&target;',
      title: 'Locate Me',
      onClick: locateUser
    }]
  })

  locateButton.button.style.fontSize = '22px'

  function locateUser (button, map) {
    this.map = map
    this.map.locate({ setView: true, maxZoom: 16 })
    this.map.on('locationfound', L.bind(onLocationFound, this))
  }

  function onLocationFound (e) {
    console.log('onLocationFound', arguments)
    const rad = e.accuracy / 2
    L.marker(e.latlng).addTo(this.map)
    L.circle(e.latlng, {
      radius: rad
    }).addTo(this.map)
  }
  return locateButton
}
