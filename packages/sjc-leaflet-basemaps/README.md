# sjc-leaflet-basemaps

Available basemaps for San Juan County WA

Each accepts all the same options as [L.tileLayer](http://leafletjs.com/reference-1.0.2.html#tilelayer)

## Example

Standalone usage
``` html
<html>
  <title>My Map</title>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
    <style> html, body, #map { width: 100vw; height: 100vh; } </style>
  </head>
  <body>
    <div id='map'></div>
    <script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
    <script src="https://unpkg.com/sjc-leaflet-map@latest/sjc-leaflet-map.min.js"></script>
    <script src="https://unpkg.com/sjc-leaflet-basemaps@latest/sjc-leaflet-basemaps.min.js"></script>
    <script>
      var map = sjcLeafletMap()
      var layer = sjcLeafletBasemaps('defaultVector')
      layer.addTo(map)
    </script>
  </body>
</html>
```

Using [Browserify](http://browserify.org)
``` javascript
# in main.js
var L = require('leaflet')
var sjcLeafletMap = require('sjc-leaflet-map')
var sjcLeafletBasemaps = require('sjc-leaflet-basemaps')

var map = sjcLeafletMap('map') # <div id='map'></div> must be in index.html

var layer = sjcLeafletBasemaps('defaultVector')
layer.addTo(map)
```

## Install
With [npm](https://npmjs.org) do:
``` shell
npm install sjc-leaflet-basemaps
```

In browser use:
``` html
<script src="https://unpkg.com/sjc-leaflet-basemaps@latest/sjc-leaflet-basemaps.min.js"></script>
```

## Usage
``` javascript
var vectorLayer = sjcLeafletBasemaps('defaultVector')
var imageryLayer = sjcLeafletBasemaps('imagery2016')
var imageryRefLayer = sjcLeafletBasemaps('defaultRaster')
var customLayer = sjcLeafletBasemaps({
  url: 'http://example.com/myTileLayer/{z}/{x}/{y}.png',
  options: {
    maxZoom: 12,
    minZoom: 8,
    attribution: 'Example Inc.'
  }
})
```
