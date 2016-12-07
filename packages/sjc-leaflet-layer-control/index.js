/* global L */

const baseMaps = require('sjc-leaflet-basemaps')

/**
 * Leaflet layer control with defaults for San Juan County WA
 * @name sjcLeafletLayerControl
 * @param {object} base Object literal with basemap layer names as keys and <Layer> objects as values
 * @param {object} over Object literal with overlay layer names as keys and <Layer> objects as values
 * @param {object} opts Options to be passed to L.Control.Layers
 * @see {@link http://leafletjs.com/reference-1.0.0.html#control-layers|Leaflet Documentation}
 * @example
 * var layerControl = sjcLeafletLayerControl({
 *   "Imagery": sjcLeafletBasemaps.defaultImageryReference(),
 *   "Streets": sjcLeafletBasemaps.defaultVector()
 * }).addTo(map)
*/
module.exports = (base, over, opts) => {
  const options = opts || {}
  const baseLayers = base || {
    'Streets': baseMaps.defaultVector(),
    'Imagery': baseMaps.defaultImageryReference(),
    'Imagery Only': baseMaps.defaultImagery()
  }

  const overlays = over || {}
  const control = L.control.layers(baseLayers,
                                       overlays,
                                       options)
  return control
}
