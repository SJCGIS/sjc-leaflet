/* global L */

/**
 * San Juan County Leaflet Map
 * @name map
 * @param {(string|HTMLElement)} id HTML element or id of HTML element to attach map
 * @param {object} opts Leaflet map options
 * @param {array} [opts.center=[48.5,-123.0]] starting center of map
 * @param {number} [opts.zoom=10] starting zoom level of map
 * @param {boolean} [opts.zoomControl=false] if true, add default zoom control to map
 * @see {@link http://leafletjs.com/reference-1.0.0.html#map|Leaflet Documentation}
 * @example
 * var map = sjcLeaflet.map('map', {
 *   zoom: 13,
 *   center: [48.537, -123.031]
 * })
*/
module.exports = function (id, opts) {
  const options = opts || {}
  if (!id) id = 'map'
  if (!options.center) options.center = [48.5, -123.0]
  if (!options.zoom) options.zoom = 10
  if (!options.maxBounds) {
    options.maxBounds = [
    [48.365374, -123.310547],
    [48.837605, -122.681580]
    ]
  }

  if (!options.minZoom) options.minZoom = 10
  // Don't include default zoom control unless specified
  if (!options.zoomControl) options.zoomControl = false

  const map = L.map(id, options)
  return map
}
