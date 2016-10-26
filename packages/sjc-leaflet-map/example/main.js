require('leaflet')
var baseMaps = require('../../sjc-leaflet-basemaps')
var SjcMap = require('../')

SjcMap('map', {
  layers: [
    baseMaps.defaultVector()
  ]
})
