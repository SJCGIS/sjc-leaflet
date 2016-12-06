require('leaflet')
var SjcMap = require('sjc-leaflet-map')
var baseMaps = require('../')

var base = baseMaps.defaultImageryReference()
var map = SjcMap('map')

base.addTo(map)
