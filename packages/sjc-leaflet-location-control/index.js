/* global L */

require('leaflet-easybutton')
const sf = require('sheetify')

sf('leaflet-easybutton', { global: true })
sf('./css/main.css', { global: true })

/**
 * Location control button
 * @name sjcLeafletLocationControl
 * @example
 * var locationControl = sjcLeafletLocationControl()
 * locationControl.addTo(map)
 */

module.exports = (options) => {
  const locateButton = L.easyButton({
    id: 'location-control-button',
    states: [{
      stateName: 'locate-me',
      icon: 'location location-off',
      title: 'Locate Me',
      onClick: locateUser
    }, {
      stateName: 'locating',
      icon: 'location location-locating location-spin',
      title: 'Locating',
      onClick: stopLocate
    }, {
      stateName: 'follow-me',
      icon: 'location location-on',
      title: 'Following',
      onClick: stopLocate
    }, {
      stateName: 'locate-error',
      icon: 'location location-error',
      title: 'Location unavailable',
      onClick: stopLocate
    }, {
      stateName: 'locate-out-bounds',
      icon: 'location location-error',
      title: 'Current location out of range of map',
      onClick: stopLocate
    }]
  })

  function stopLocate (button, map) {
    button.state('locate-me')
    map.stopLocate()
    this.layers.clearLayers()
    this.map.removeLayer(this.layers)
  }

  function locateUser (button, map) {
    button.state('locating')
    this.map = map
    this.marker = L.marker([0, 0])
    this.circle = L.circle([0, 0])
    this.layers = L.featureGroup([this.marker, this.circle])
    this.map.locate({ watch: true })
    this.map.on('locationfound', L.bind(onLocationFound, this))
    this.map.on('locationerror', L.bind(onLocationError, this))
  }

  function onLocationError (err) {
    console.log(err.message)
    this.state('locate-error')
    this.layers.clearLayers()
    this.map.removeLayer(this.layers)
  }

  function onLocationFound (e) {
    const mapBounds = this.map.options.maxBounds
    if (!validateLocation(e, mapBounds)) {
      this.state('locate-out-bounds')
    } else {
      this.state('follow-me')
      const rad = e.accuracy / 2
      this.marker.setLatLng(e.latlng).bindPopup(`${e.latlng.lat}, ${e.latlng.lng} (+/-${Math.round(e.accuracy)}m)`)
      this.circle.setLatLng(e.latlng)
      this.circle.setRadius(rad)
      this.layers.addTo(this.map)
      this.map.fitBounds(this.layers.getBounds())
    }
  }

  function validateLocation (e, bounds) {
    if (bounds && !bounds.contains(e.latlng)) {
      return false
    } else {
      return true
    }
  }

  return locateButton
}
