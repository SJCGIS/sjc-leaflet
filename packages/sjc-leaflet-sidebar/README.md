# sjc-leaflet-sidebar

A customized version of [leaflet-sidebar-v2](https://www.npmjs.com/package/leaflet-sidebar-v2) for use in San Juan County WA

Includes the same options and methods as [leaflet-sidebar-v2](https://www.npmjs.com/package/leaflet-sidebar-v2#api)

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
    <script src="https://unpkg.com/sjc-leaflet-sidebar"></script>
    <script>
      var map = sjcLeafletMap('map')
      var vectorLayer = sjcLeafletBasemaps.defaultVector()
      vectorLayer.addTo(map)
      var sidebar = sjcLeafletSidebar().addTo(map)
    </script>
  </body>
</html>
```

Using [Browserify](http://browserify.org)
``` javascript
# in main.js
<script show>
var L = require('leaflet')
var sjcLeafletMap = require('sjc-leaflet-map')
var sjcLeafletBasemaps = require('sjc-leaflet-basemaps')
var sjcLeafletSidebar = require('sjc-leaflet-sidebar')

var map = sjcLeafletMap('map') # a div with id='map' must be in index.html

var vectorLayer = sjcLeafletBasemaps.defaultVector()
vectorLayer.addTo(map)
var sidebar = sjcLeafletSidebar('sidebar') // div with id='sidebar' must be in index.html
sidebar.addTo(map)
</script>

```

## Install
With [npm](https://npmjs.org) do:
``` shell
npm install sjc-leaflet-sidebar
```

In browser use:
``` html
<script src="https://unpkg.com/sjc-leaflet-sidebar"></script>
```

## Usage
``` javascript
var sidebar = sjcLeafletSidebar('sidebar', {
  position: 'right'
}).addTo(map)

sidebar.addPanel({
  id: 'home',
  tab: '<i class="tab tab-home"></i>',
  pane: '<h1>Home</h1>',
  position: 'top'
})

```
