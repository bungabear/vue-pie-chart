<template>
  <div id="app">
    <vc-piechart :series="series1" size="256px" :legend="true" title="Chart 1" :donut="true" />
    <vc-piechart :series="series2" size="12em" :legend="true"  title="Chart 2" :donut="true" />
  </div>
</template>
<script>
import VcPiechart from './components/vc-piechart/piechart'

export default {
  name: 'app',
  components: {
    VcPiechart
  },
  data () {
    return {
      series1: [{
        color: '#f44336',
        value: 40,
        label: 'Red'
      }, {
        color: '#ff9800',
        value: 30,
        label: 'Orange'
      }, {
        color: '#4caf50',
        value: 30,
        label: 'Green'
      }],
      series2: [{
        color: '#f44336',
        value: 25,
        label: 'Red'
      }, {
        color: '#ff9800',
        value: 25,
        label: 'Orange'
      }, {
        color: '#4caf50',
        value: 25,
        label: 'Green'
      }, {
        color: '#9c27b0',
        value: 25,
        label: 'Purple'
      }]
    }
  }
}
</script>
