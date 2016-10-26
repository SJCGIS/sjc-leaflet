require('leaflet')
var SjcMap = require('../../sjc-leaflet-map')
var baseMaps = require('../../sjc-leaflet-basemaps')
var LocateControl = require('../')

var map = SjcMap('map', {
  zoom: 13
})

map.addLayer(baseMaps.defaultImageryReference())

var locate = LocateControl()
locate.addTo(map)
