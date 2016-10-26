require('leaflet')
const tape = require('tape')
const layerControl = require('./')

tape.test('default layer control', function (t) {
  t.plan(1)
  const defControl = layerControl()
  t.ok(defControl, 'default location control ok')
})
