require('leaflet.markercluster');
var ClusteredFeatureLayer = require('esri-leaflet-clustered-feature-layer');

L.App = L.App || {};

L.App.MapView = L.Class.extend({

  statics: {},

  options: {},

  initialize: function(options) {
    console.log('app.mapview.MapView::initialize', arguments);

    L.setOptions(this, options);

    this._map = null;

    this._setupMap();
  },

  _setupMap: function() {
    console.log('app.mapview.MapView::_setupMap', arguments);

    this._map = L.map('map', {
      zoomControl: false,
      minZoom: 9,
      maptiks_id: 'map'
    }).setView([48.6, -123.0], 11);

    this._createBasemapLayers();
    this._createOperationalLayers();
    this._setupConnections();

  },

  _setupConnections: function() {
    console.log('app.mapview.MapView::_setupConnections', arguments);

  },

  _createBasemapLayers: function() {
    console.log('app.mapview.MapView::_createBasemapLayers', arguments);

    this._baseLayers = null;

    var aerialBasemap = L.esri.tiledMapLayer({
      url: 'http://sjcgis.org/arcgis/rest/services/Basemaps/Aerials_2013_WM/MapServer',
      attribution: 'Pictometry International',
      maptiks_id: 'aerialBasemap'
    });

    var generalBasemap = L.esri.tiledMapLayer({
      url: 'http://sjcgis.org/arcgis/rest/services/Basemaps/General_Basemap_WM/MapServer',
      attribution: 'San Juan County GIS',
      maptiks_id: 'generalBasemap'
    });


    this._baseLayers = {
      'Streets': generalBasemap
    };

    this._map.addLayer(generalBasemap);

  },

  _createOperationalLayers: function() {
    console.log('app.mapview.MapView::_createOperationalLayers', arguments);

    this._opLayers = null;

    var referenceOverlay = L.esri.tiledMapLayer({
      url: 'http://sjcgis.org/arcgis/rest/services/Basemaps/Reference_Overlay_WM/MapServer',
      maptiks_id: 'referenceOverlay'
    });

    //    this._map.addLayer(referenceOverlay);

  }
});
