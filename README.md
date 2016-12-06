# San Juan County Leaflet Modules

A collection of modules for creating web maps for San Juan County WA using Leaflet


## Example

Using Standalone
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

See README files in [packages](/packages)

With [npm](https://npmjs.org) do:

``` shell
npm install sjc-leaflet-map
npm install sjc-leaflet-basemaps
npm install sjc-leaflet-layer-control
npm install sjc-leaflet-location-control
npm install sjc-leaflet-sidebar
```

## Change Log

Code changes are reported in the [Change Log](https://github.com/SJCGIS/sjc-leaflet/blob/master/CHANGELOG.MD). However, changes to maps may not be included.

## Licensing
Copyright 2016 San Juan County GIS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](/LICENSE) file.
