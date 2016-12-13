require('leaflet')
const tape = require('tape')
const sjcLeafletBasemaps = require('./')

tape.test('defined single tile layer basemap', function (t) {
  t.plan(3)
  let basemap = sjcLeafletBasemaps('general')
  t.equal(basemap._url, 'https://sjcgis.org/arcgis/rest/services/Basemaps/General_Basemap_WM/MapServer/tile/{z}/{y}/{x}')
  t.equal(basemap.options.maxZoom, 19)
  t.equal(basemap.options.attribution, '<a href="http://sjcgis.org">San Juan County GIS</a>')
})

tape.test('override options on defined single tile layer basemap', function (t) {
  t.plan(3)
  let basemap = sjcLeafletBasemaps('imagery2013', {
    maxZoom: 15,
    attribution: 'Test'
  })
  t.equal(basemap._url, 'https://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2013_WM/MapServer/tile/{z}/{y}/{x}')
  t.equal(basemap.options.maxZoom, 15)
  t.equal(basemap.options.attribution, 'Test')
})

tape.test('defined multiple tile layer basemap', function (t) {
  t.plan(3)
  let basemap = sjcLeafletBasemaps('imagery2013Reference')
  let layers = basemap.getLayers()
  t.equal(layers.length, 2)
  t.equal(layers[0].options.maxZoom, 19)
  t.equal(layers[0].options.attribution, '<a href="http://sjcgis.org">San Juan County GIS</a> | <a href="http://pictometry.com">Pictometry International Inc</a>')
})

tape.test('override options on defined multiple tile layer basemap', function (t) {
  t.plan(3)
  let basemap = sjcLeafletBasemaps('imagery2013Reference', {
    maxZoom: 13,
    attribution: 'Test2'
  })
  let layers = basemap.getLayers()
  t.equal(layers.length, 2)
  t.equal(layers[0].options.maxZoom, 13)
  t.equal(layers[0].options.attribution, 'Test2')
})

tape.test('user defined tile layer', function (t) {
  t.plan(4)
  let basemap = sjcLeafletBasemaps({
    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      maxZoom: 12,
      minZoom: 8,
      attribution: '© OpenStreetMap contributors'
    }
  })
  t.equal(basemap._url, 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  t.equal(basemap.options.maxZoom, 12)
  t.equal(basemap.options.minZoom, 8)
  t.equal(basemap.options.attribution, '© OpenStreetMap contributors')
})

tape.test('invalid basemap error', function (t) {
  t.plan(1)
  t.throws(function () { sjcLeafletBasemaps('xxxx') })
})

tape.test('no arguments error', function (t) {
  t.plan(1)
  t.throws(function () { sjcLeafletBasemaps() })
})
