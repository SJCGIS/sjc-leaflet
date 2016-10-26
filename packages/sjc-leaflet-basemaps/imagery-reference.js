/* global L */

/**
 * Group basemap showing specified base layer with reference labels overlay
 * @param {object} [base=defaultImagery()] Leaflet tile layer (usually imagery)
 * @param {object} opts options for Leaflet tilelayers
 * @returns {object} Leaflet layer group
*/
module.exports = (base, opts) => {
  const options = opts || {}
  options.maxZoom = 19
  let baseLayer
  if (base) {
    baseLayer = base()
  } else {
    baseLayer = require('./').defaultImagery()
  }
  const overlay = L.tileLayer('https://sjcgis.org/arcgis/rest/services/Basemaps/Reference_Overlay_WM/MapServer/tile/{z}/{y}/{x}', options)
  const layer = L.layerGroup([baseLayer, overlay])
  return layer
}
