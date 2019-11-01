<template>
  <div id="app">
    <h1 v-html="name" />
    <p v-html="description" />
    <div :class="['table-layout']">
      <div>
        <div>
          <h2>Default</h2>
          <vc-piechart :data="data1" />
        </div>
        <div>
          <h2>Customized Via Props</h2>
          <vc-piechart :data="data2" size="12em" :legend="true"  title="Chart 2" :donut="true" :flat="false" />
        </div>
      </div>
    </div>
    <h2>Installation</h2>
    <pre><code>$ npm i vc-piechart --save</code></pre>
    <h2>Usage</h2>
    <pre><code>// in main.js, use globally
import VcPiechart from 'vc-piechart'
Vue.use(VcPiechart)

// as a component in another component
import VcPiechart from 'vc-piechart'

export default {
  name: 'app',
  components: {
    VcPiechart
  }
}</code></pre>
    <pre><code>&lt;vc-piechart :data="data1" /&gt;</code></pre>
    <pre><code>&lt;vc-piechart :data="data2" size="12em" :legend="true"  title="Chart 2" :donut="true" :flat="false" /&gt;</code></pre>
    <h2>Props</h2>
    <ul>
      <li><code>data (Array)</code>: chart data (default: <code>[]</code>):<pre><code>{{ data1 }}</code></pre></li>
      <li><code>size (String)</code>: chart's height and width in <code>px</code>, <code>em</code>, etc. default: <code>256px</code></li>
      <li><code>legend (Boolean)</code>: toggle chart's legend element (default: <code>true</code>)</li>
      <li><code>title (String)</code>: optional chart title (default: <code>null</code>)</li>
      <li><code>donut (Boolean)</code>: toggle the donut mode (default: <code>false</code>)</li>
      <li><code>flat (Boolean)</code>: toggle chart's drop-shadow (default: <code>false</code>)</li>
    </ul>
    <p>Version {{ version }} developed by <a href="https://wemakesites.net/" target="_blank">Martin Ivanov</a> and available on
      <a href="https://bitbucket.org/acidmartin/vc-piechart/" target="_blank">BitBucket</a> and
      <a href="https://www.npmjs.com/package/vc-piechart" target="_blank">NPM</a>.</p>
  </div>
</template>
<script>
import VcPiechart from './components/vc-piechart/piechart'
import {name, description, version} from '../package'

export default {
  name: 'app',
  components: {
    VcPiechart
  },
  data () {
    return {
      name,
      version,
      description,
      data1: [{
        color: '#f44336',
        value: 100,
        label: 'Red'
      }, {
        color: '#ff9800',
        value: 123,
        label: 'Orange'
      }, {
        color: '#4caf50',
        value: 456,
        label: 'Green'
      }],
      data2: [{
        color: '#f44336',
        value: 12,
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
<style>
body
{
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #303030;
}

.table-layout
{
  display: table;
  table-layout: fixed;
  width: 100%;
}

.table-layout > *
{
  display: table-row;
}

.table-layout > * > *
{
  display: table-cell;
}
</style>