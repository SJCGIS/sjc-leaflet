/**
 * San Juan County Leaflet Basemaps
 * @name sjcLeafletBasemaps
*/

/** Default vector basemap */
module.exports.defaultVector = require('./general-map')

/** Default imagery basemap */
module.exports.defaultImagery = require('./imagery-2013')

/** Default imagery and reference labels basemap */
module.exports.defaultImageryReference = require('./imagery-reference')

/** General Basemap showing streets and other vector data */
module.exports.generalMap = require('./general-map')

/** Aerial imagery from 2013 as basemap */
module.exports.imagery2013 = require('./imagery-2013')

/**
 * Group basemap showing 2013 aerial imagery with reference labels overlay
 * @todo How do we pass in opts?
*/
module.exports.imagery2013Reference = require('./imagery-reference')(exports.imagery2013)
