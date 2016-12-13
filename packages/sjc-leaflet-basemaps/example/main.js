require('leaflet')
var sjcLeafletMap = require('../../sjc-leaflet-map')
var sjcLeafletBaseMaps = require('../')

var base = sjcLeafletBaseMaps('defaultRaster')

var map = sjcLeafletMap('map', {
  zoom: 13
})

base.addTo(map)
