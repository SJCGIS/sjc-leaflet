# sjc-leaflet-map

 c
Default Leaflet map for San Juan County WA

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### sjc-leaflet/map

San Juan County Leaflet Map

**Parameters**

-   `id` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element))** HTML element or id of HTML element to attach map
-   `opts` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Leaflet map options
    -   `opts.center` **\[[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)]** starting center of map (optional, default `[48.5,-123.0]`)
    -   `opts.zoom` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** starting zoom level of map (optional, default `10`)

**Examples**

```javascript
var map = SjcMap('map')
```