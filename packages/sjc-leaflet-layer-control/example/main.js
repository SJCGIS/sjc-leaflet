require('leaflet')
var sjcLeafletMap = require('sjc-leaflet-map')
var sjcLeafletBaseMaps = require('sjc-leaflet-basemaps')
var sjcLeafletLayerControl = require('../')

var map = sjcLeafletMap('map', {
  zoom: 12
})

var layer = sjcLeafletBaseMaps.defaultVector()

map.addLayer(layer)

var layerControl = sjcLeafletLayerControl({
  'Streets': layer,
  'Imagery': sjcLeafletBaseMaps.defaultImageryReference()
})

layerControl.addTo(map)
