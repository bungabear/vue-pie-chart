# vc-piechart

> A VueJS pie/donut chart component, utilizing CSS conic gradients with mininal markup and calculations

## Props

 - data (Array): chart data (default: []):
 ```javascript
[
  {
    "color": "#f44336",
    "value": 100,
    "label": "Red"
  },
  {
    "color": "#ff9800",
    "value": 123,
    "label": "Orange"
  },
  {
    "color": "#4caf50",
    "value": 456,
    "label": "Green"
  }
]
```
 - size (String): chart's height and width in px, em, etc. default: 256px
 - legend (Boolean): toggle chart's legend element (default: true)
 - title (String): optional chart title (default: null)
 - donut (Boolean): toggle the donut mode (default: false)
 - flat (Boolean): toggle chart's drop-shadow (default: false)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Credits

Created by [Martin Ivanov](https://wemakesites.net).