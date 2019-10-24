<template>
  <div id="app">
    <vc-piechart :series="series1" size="256px" />
    <vc-piechart :series="series2" size="12em" />
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
        value: 40
      }, {
        color: '#ff9800',
        value: 30
      }, {
        color: '#4caf50',
        value: 30
      }],
      series2: [{
        color: '#f44336',
        value: 25
      }, {
        color: '#ff9800',
        value: 25
      }, {
        color: '#4caf50',
        value: 25
      }, {
        color: '#9c27b0',
        value: 25
      }]
    }
  }
}
</script>
