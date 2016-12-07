require('leaflet')
var sjcLeafletMap = require('sjc-leaflet-map')
var sjcLeafletBaseMaps = require('../')

var base = sjcLeafletBaseMaps.defaultImageryReference()
var map = sjcLeafletMap('map')

base.addTo(map)
