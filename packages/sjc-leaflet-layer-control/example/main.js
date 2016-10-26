require('leaflet')
var SjcMap = require('../../sjc-leaflet-map')
var baseMaps = require('../../sjc-leaflet-basemaps')
var LayerControl = require('../')

var map = SjcMap('map', {
  zoom: 12
})

var layer = baseMaps.defaultVector()

map.addLayer(layer)

var layerControl = LayerControl({
  'Streets': layer,
  'Imagery': baseMaps.defaultImageryReference()
})

layerControl.addTo(map)
