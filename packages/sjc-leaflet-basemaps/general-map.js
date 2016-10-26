/* global L */

/**
 * General streets vector basemap
 * @param {object} opts options for Leaflet tilelayers
 * @returns {object} Leaflet tile layer
*/
module.exports = (opts) => {
  const options = opts || {}
  options.maxZoom = 19
  options.attribution = '<a href="http://sjcgis.org">San Juan County GIS</a>'
  const layer = new L.TileLayer('https://sjcgis.org/arcgis/rest/services/Basemaps/General_Basemap_WM/MapServer/tile/{z}/{y}/{x}', options)
  return layer
}
