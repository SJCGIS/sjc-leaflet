# San Juan County Leaflet Boilerplate

A web application boilerplate for San Juan County WA web maps based on Leaflet and Esri-Leaflet.

## Features:

* Uses [Esri-Leaflet](http://github.com/esri/esri-leaflet) with County ArcGIS Server map services
* Uses County custom geocoder for address, road, parcel, place name searches.

## Contributions

Please read [How To Contribute](http://github.com/sjcgis/sjc-leaflet/blob/master/CONTRIBUTING.MD).

## How to build it yourself (Advanced)

1) Install [node.js](https://nodejs.org/).

2) Download the [Sjc-Leaflet.zip](https://github.com/SJCGIS/sjc-leaflet/archive/master.zip) file and extract it to a location.

3) Alternatively, install [Git](http://www.git-scm.com/) and clone the repository. [Learn to Use Git here](https://try.github.io/).

4) Open a terminal or command window (Start - Run - CMD on Windows).

5) Change the directory (```cd```) to the location of ```sjc-leaflet``` on your computer where you extracted the zip file (or cloned the git repository). Example: ```cd C:\sjc-leaflet```

6) Type ```npm install``` to install all the required dependencies (requires internet connection).

7) Type ```npm install -g grunt``` to install the Grunt build tools globally (may require administrator permissions).

8) Copy ```ga.secret.js``` to ```ga.js``` and enter your [Google Analytics](http://analytics.google.com) ID.

9) Copy ```maptiks.secret.js``` to ```maptiks.js`` and enter your [Maptiks Analytics](http://maptiks.com) ID.

10) Type ```grunt``` to run the application locally in your browser.

11) Type ```grunt build:prod``` to compile the sjc-leaflet app into the ```dist``` folder.

12) Move the contents of the ```dist``` folder to a web-enabled directory (Example: ```c:\inetpub\wwwroot\sjc-leaflet```) or a web hosting service.

13) Report bugs or installation problems by [submitting an issue on GitHub](http://github.com/sjcgis/sjc-leaflet/issues/new).

## Change Log

Code changes are reported in the [Change Log](https://github.com/SJCGIS/sjc-leaflet/blob/master/CHANGELOG.MD). However, changes to maps may not be included.

## Licensing
Copyright 2015 San Juan County GIS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/sjcgis/sjc-leaflet/master/LICENSE.txt) file.
