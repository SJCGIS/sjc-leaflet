require('leaflet')
const tape = require('tape')
const SjcBasemaps = require('./index')

tape.test('initialization', function (t) {
  t.plan(1)
  const defVector = SjcBasemaps.defaultVector()
  t.ok(defVector, 'default vector basemap is ok')
})
