/* global L */

require('leaflet-sidebar-v2')
const sf = require('sheetify')

sf('leaflet-sidebar-v2', { global: true })

/** Sidebar control
 * @name sjcLeafletSidebar
 * @example
 * var sidebar = sjcLeafletSidebar('sidebar', {
 * position: 'right'
 * }).addTo(map)
 *
 * sidebar.addPanel({
 * id: 'home',
 * tab: '<i class="tab tab-home"></i>',
 * pane: '<h1>Home</h1>',
 * position: 'top'
 * })
 */

module.exports = (el, options) => {
  const sidebar = L.control.sidebar(el, options)
  return sidebar
}
