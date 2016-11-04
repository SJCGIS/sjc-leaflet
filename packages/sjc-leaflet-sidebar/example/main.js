require('leaflet')
var SjcMap = require('../../sjc-leaflet-map')
var baseMaps = require('../../sjc-leaflet-basemaps')
var SjcSidebar = require('../')

var base = baseMaps.defaultImageryReference()

var content = `
<h1>sjc-leaflet-sidebar</h1>
<p>This is a customizable sidebar for Leaflet maps. It is a wrapper for the leaflet-sidebar-v2 library but may include some custom defaults for use in San Juan County WA.</p>
`

var map = SjcMap('map', {
  layers: [base],
  zoom: 13,
  center: [48.699119, -122.905426],
  zoomControl: false
})

var sidebar = SjcSidebar('sidebar')
sidebar.addTo(map)

sidebar.addPanel({
  id: 'home',
  tab: `<i class="tab tab-home"></i>`,
  pane: content,
  position: 'top'
})
