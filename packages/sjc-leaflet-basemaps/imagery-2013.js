/* global L */

/**
 * Aerial imagery from 2013 as basemap
 * @param {object} opts options for Leaflet tilelayers
 * @returns {object} Leaflet tile layer
*/
module.exports = (opts) => {
  const options = opts || {}
  options.maxZoom = 19
  options.attribution = '<a href="http://sjcgis.org">San Juan County GIS</a>'
  options.attribution += ' | <a href="http://pictometry.com">Pictometry International Inc</a>'
  const layer = L.tileLayer('https://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2013_WM/MapServer/tile/{z}/{y}/{x}', options)
  return layer
}
