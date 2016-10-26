require('leaflet')
const tape = require('tape')
const Map = require('./')

tape.test('default map', function (t) {
  t.plan(3)
  const el = document.createElement('map')
  const map = Map(el)
  t.ok(map, 'Map created with no options')
  const center = map.getCenter()
  t.deepEqual([center.lat, center.lng], [48.5, -123.0], 'Map center is default')
  t.equal(map.getZoom(), 10, 'Map zoom is default')
})

tape.test('create map by passing Leaflet options', function (t) {
  t.plan(2)
  const el = document.createElement('map')
  const map = Map(el, {
    zoomControl: false
  })
  const elements = document.getElementsByClassName('leaflet-control-zoom-leaflet-bar')
  t.ok(map, 'Map created with options')
  t.equal(elements.length, 0, 'No zoom control added to map as specified')
})

tape.test('override defaults when creating map', function (t) {
  t.plan(2)
  const center = { lat: 48.52, lng: -123.17 }
  const zoom = 14
  const el = document.createElement('map')
  const map = Map(el, {
    center: center,
    zoom: zoom
  })

  t.deepEqual(map.getCenter(), center, 'Center override')
  t.equal(map.getZoom(), zoom, 'Zoom override')
})
