require('leaflet')
var sjcLeafletMap = require('sjc-leaflet-map')
var sjcLeafletBaseMaps = require('sjc-leaflet-basemaps')
var sjcLeafletLocationControl = require('../')

var map = sjcLeafletMap('map', {
  zoom: 13
})

map.addLayer(sjcLeafletBaseMaps('defaultRaster'))

var locate = sjcLeafletLocationControl()
locate.addTo(map)
