# sjc-leaflet-map

A default Leaflet map for San Juan County WA

Accepts all the same options as [L.map](http://leafletjs.com/reference-1.0.2.html#map)

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

var map = sjcLeafletMap('map') // div with id='map' must be in index.html

var layer = sjcLeafletBasemaps('defaultVector')
layer.addTo(map)
```

## Install
With [npm](https://npmjs.org) do:
``` shell
npm install sjc-leaflet-map
```

In browser use:
``` html
<script src="https://unpkg.com/sjc-leaflet-map@latest/sjc-leaflet-map.min.js"></script>
```

## Usage
``` javascript
var map = sjcLeafletMap({
  center: [48.784162,-122.954800],
  zoom: 15
})

```
