require('leaflet')
const tape = require('tape')
const locationControl = require('./')

tape.test('default location control', function (t) {
  t.plan(1)
  const defControl = locationControl()
  t.ok(defControl, 'default location control ok')
})
