L.esri.Geocoding = require('esri-leaflet-geocoder');
require('../mapview/MapView');
require('sidebar-v2/js/leaflet-sidebar');
var humane = require('humane-js');

L.App = L.App || {};

L.App.AppController = L.Class.extend({

  statics: {},

  options: {},

  initialize: function(options) {
    console.log('app.controller.AppController::initialize', arguments);
    L.setOptions(this, options);

    this.mapView = new L.App.MapView();

    this.zoomControl = new L.control.zoom({
      position: 'topright'
    }).addTo(this.mapView._map);

    this.searchControl = new L.esri.Geocoding.geosearch({
      providers: [
        new L.esri.Geocoding.mapServiceProvider({
          url: 'http://sjcgis.org/arcgis/rest/services/Polaris/LocationSearch/MapServer',
          layers: [4,1,0,2],
          searchFields: ['FULLADDR', 'Road_Name', 'PIN', 'NAME'],
          formatSuggestion: function (feature) {
            var result = feature.properties[feature.layerName] || feature.properties[feature.displayFieldName];
            return result + ' <small>' + feature.layerName + '</small>';
          }
        })
      ],
      useArcgisWorldGeocoder: false,
      mapAttribution: null,
      position: 'topright',
      useMapBounds: false
    }).addTo(this.mapView._map);

    this.sidebar = new L.control.sidebar('sidebar').addTo(this.mapView._map);

    this.sidebar.open('home');

    this.results = new L.featureGroup().addTo(this.mapView._map);

    this.setupConnections();
  },

  setupConnections: function(options) {
    console.log('app.controller.AppController::setupConnections', arguments);

    var that = this;

    this.searchControl.on('results', function(data) {
      that.results.clearLayers();
      if(data.results.length === 0){
        humane.log('No results from search');
      } else {
        for(var i = data.results.length - 1; i >= 0; i--) {
          var marker = L.marker(data.results[i].latlng, {
            title: data.results[i].text,
            clickable: true
          });
          that.results.addLayer(marker);
          marker.bindPopup(data.results[i].text).openPopup();
        }
      }
    });

    this.results.on('contextmenu', function(evt) {
      that.results.clearLayers();
    });
  }

});
