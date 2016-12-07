require('leaflet')
var sjcLeafletBasemaps = require('sjc-leaflet-basemaps')
var sjcLeafletMap = require('../')

var map = sjcLeafletMap('map', {
  center: [48.582770, -123.075726],
  zoom: 15
})

var baseLayer = sjcLeafletBasemaps.defaultImageryReference()
baseLayer.addTo(map)
