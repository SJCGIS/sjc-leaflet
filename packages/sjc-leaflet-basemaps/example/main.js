require('leaflet')
var SjcMap = require('../../sjc-leaflet-map')
var baseMaps = require('../')

var base = baseMaps.defaultImageryReference()
SjcMap('map', {
  layers: [base]
})
