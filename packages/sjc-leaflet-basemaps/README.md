# sjc-leaflet-basemaps

Available basemaps for San Juan County WA

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
var sjcMap = require('sjc-leaflet-map')
var sjcBasemaps = require('sjc-leaflet-basemaps')

var map = sjcMap('map') # <div id='map'></div> must be in index.html

var layer = sjcBasemaps.defaultVector()
layer.addTo(map)
```

## Install
With [npm](https://npmjs.org) do:
``` shell
npm install sjc-leaflet-basemaps
```

## Usage
``` javascript
var vectorLayer = sjcLeafletBasemaps.defaultVectorLayer()
var imageryLayer = sjcLeafletBasemaps.defaultImageryLayer()
var imageryRefLayer = sjcLeafletBasemaps.defaultImageryReference()

```
