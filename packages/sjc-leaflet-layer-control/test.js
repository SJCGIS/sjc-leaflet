require('leaflet')
const tape = require('tape')
const Control = require('./')

tape.test('control with defaults', function (t) {
  t.plan(1)
  const defControl = Control()
  t.ok(defControl, 'default layer control ok')
})
