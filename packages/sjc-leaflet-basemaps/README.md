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
  </head>
  <body>
    <div id='map'></div>
    <script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
    <script src="https://unpkg.com/sjc-leaflet-map"></script>
    <script src="https://unpkg.com/sjc-leaflet-basemaps"></script>
    <script>
      var map = sjcLeafletMap()
      var layer = sjcLeafletBasemaps.defaultVector()
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

var layer = sjcLeafletBasemaps.defaultVector()
layer.addTo(map)
```

## Install
With [npm](https://npmjs.org) do:
``` shell
npm install sjc-leaflet-basemaps
```

In browser use:
``` html
<script src="https://unpkg.com/sjc-leaflet-basemaps"></script>
```

## Usage
``` javascript
var vectorLayer = sjcLeafletBasemaps.defaultVectorLayer()
var imageryLayer = sjcLeafletBasemaps.defaultImageryLayer()
var imageryRefLayer = sjcLeafletBasemaps.defaultImageryReference()

```
