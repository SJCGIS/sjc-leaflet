/* global L */

require('leaflet-sidebar-v2')
const sf = require('sheetify')

sf('leaflet-sidebar-v2', { global: true })

/** Sidebar control
 * @name sidebarControl
 * @example
 */

module.exports = (el, options) => {
  const sidebar = L.control.sidebar(el, options)
  return sidebar
}
