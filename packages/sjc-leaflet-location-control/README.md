# sjc-leaflet-location-control

Geolocation control for Leaflet maps in (though not specific to) San Juan County WA

Can be also be used with just standard Leaflet.

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
    <script src="https://unpkg.com/sjc-leaflet-location-control"></script>
    <script>
      var map = sjcLeafletMap('map')
      var vectorLayer = sjcLeafletBasemaps.defaultVector()
      vectorLayer.addTo(map)
      var locateMe = sjcLeafletLocationControl().addTo(map)
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
var sjcLeafletLocationControl = require('sjc-leaflet-location-control')

var map = sjcLeafletMap('map') # a div with id='map' must be in index.html

var vectorLayer = sjcLeafletBasemaps.defaultVector()
vectorLayer.addTo(map)
var locateMe = sjcLeafletLocationControl()
locateMe.addTo(map)

```

## Install
With [npm](https://npmjs.org) do:
``` shell
npm install sjc-leaflet-location-control
```

In browser use:
``` html
<script src="https://unpkg.com/sjc-leaflet-location-control"></script>
```

## Usage
``` javascript
var layerControl = sjcLeafletLocationControl().addTo(map)

```
