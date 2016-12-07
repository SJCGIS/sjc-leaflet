# sjc-leaflet-layer-control

Layer control for Leaflet maps in San Juan County WA

Accepts all the same options as [L.control.layers](http://leafletjs.com/reference-1.0.2.html#control-layers)

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
    <script src="https://unpkg.com/sjc-leaflet-layer-control"></script>
    <script>
      var map = sjcLeafletMap('map')
      var vectorLayer = sjcLeafletBasemaps.defaultVector()
      var imageryLayer = sjcLeafletBasemaps.defaultImagery()
      vectorLayer.addTo(map)
      var layerControl = sjcLeafletLayerControl({
        'Streets': vectorLayer,
        'Imagery': imageryLayer
      })
      layerControl.addTo(map)
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
var sjcLeafletLayerControl = require('sjc-leaflet-layer-control')

var map = sjcLeafletMap('map') # a div with id='map' must be in index.html

var vectorLayer = sjcLeafletBasemaps.defaultVector()
var imageryLayer = sjcLeafletBasemaps.defaultImagery()
vectorLayer.addTo(map)

var layerControl = sjcLeafletLayerControl({
  'Streets': vectorLayer,
  'Imagery': imageryLayer
})
```

## Install
With [npm](https://npmjs.org) do:
``` shell
npm install sjc-leaflet-layer-control
```

In browser use:
``` html
<script src="https://unpkg.com/sjc-leaflet-layer-control"></script>
```

## Usage
``` javascript
var layerControl = sjcLeafletLayerControl({ **layers** }).addTo(map)

```
