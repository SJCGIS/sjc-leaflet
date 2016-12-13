const L = require('leaflet')

const TILES = {
  general: {
    url: 'https://sjcgis.org/arcgis/rest/services/Basemaps/General_Basemap_WM/MapServer/tile/{z}/{y}/{x}',
    options: {
      maxZoom: 19,
      attribution: '<a href="http://sjcgis.org">San Juan County GIS</a>'
    }
  },
  imagery2013: {
    url: 'https://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2013_WM/MapServer/tile/{z}/{y}/{x}',
    options: {
      maxZoom: 19,
      attribution: '<a href="http://sjcgis.org">San Juan County GIS</a> | <a href="http://pictometry.com">Pictometry International Inc</a>'
    }
  },
  imagery2016: {
    url: 'https://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2016_WM/MapServer/tile/{z}/{y}/{x}',
    options: {
      maxZoom: 19,
      attribution: '<a href="http://sjcgis.org">San Juan County GIS</a> | <a href="http://pictometry.com">Pictometry International Inc</a>'
    }
  },
  imageryReference: {
    url: 'https://sjcgis.org/arcgis/rest/services/Basemaps/Reference_Overlay_WM/MapServer/tile/{z}/{y}/{x}',
    options: {
      minZoom: 10,
      maxZoom: 19
    }
  }
}

const BASEMAPS = {
  general: TILES.general,
  imagery2013: TILES.imagery2013,
  imagery2016: TILES.imagery2016,
  imagery2013Reference: [ TILES.imagery2013, TILES.imageryReference ],
  imagery2016Reference: [ TILES.imagery2016, TILES.imageryReference ],
  defaultVector: TILES.general,
  defaultRaster: [ TILES.imagery2016, TILES.imageryReference ]
}

function createTileLayer (basemap) {
  const options = basemap.options || {}
  return L.tileLayer(basemap.url, options)
}

function createTileLayerGroup (basemaps) {
  const layers = basemaps.map(createTileLayer)
  return L.layerGroup(layers)
}

/**
 * San Juan County Leaflet Basemaps
 * @name sjcLeafletBasemaps
 */
module.exports = (basemap, opts) => {
  const options = opts || {}

  if (typeof basemap === 'object' && basemap.url && basemap.options) {
    const layer = createTileLayer(basemap)
    L.setOptions(layer, options)
    return layer
  } else if (BASEMAPS[basemap] && Object.prototype.toString.call(BASEMAPS[basemap]) === '[object Array]') {
    const layer = createTileLayerGroup(BASEMAPS[basemap])
    layer.eachLayer(tile => L.setOptions(tile, options))
    return layer
  } else if (typeof basemap === 'string' && BASEMAPS[basemap]) {
    const layer = createTileLayer(BASEMAPS[basemap])
    L.setOptions(layer, options)
    return layer
  } else {
    throw new ReferenceError(`sjcLeafletBasemaps: Invalid parameter. Use one of ${Object.keys(BASEMAPS).join(', ')}`)
  }
}
