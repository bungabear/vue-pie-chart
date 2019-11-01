<template>
  <div :class="[name, flat ? `${name}-flat` : null]" :id="id" v-if="data.length">
    <div :class="[`${name}-title`]" v-html="title" v-if="title" />
    <div :class="[`${name}-container`]">
      <div :class="[`${name}-donut`]" v-if="donut" />
    </div>
    <ul v-if="legend" :class="[`${name}-legend`]">
      <li v-for="(item, index) in data" :key="index">
        <span :style="{background: item.color}" /><span v-html="label(item)" />
      </li>
    </ul>
    <vc-style>
    #{{ id }},
    #{{ id }} .{{ name }}-container
    {
      width: {{ size }};
    }

    #{{ id }} .{{ name }}-container
    {
      height: {{ size }};
    }

    #{{ id }} .{{ name }}-container
    {
      background: {{ segments }};
    }

    #{{ id }} .{{ name }}-donut
    {
      background: {{ parentBgColor }};
      width: calc({{ size }} / 2.5);
      height: calc({{ size }} / 2.5);
    }
    </vc-style>
  </div>
</template>
<script>
import uuid from 'uuid/v4'
import VcStyle from './style'

export default {
  name: 'hello',
  components: {
    VcStyle
  },
  data () {
    return {
      total: 0,
      name: 'vc-piechart',
      id: `vc-piechart-${uuid()}`,
      parentBgColor: null
    }
  },
  props: {
    /**
     * Width and height of the chart in px, em, percentage, etc.
     */
    size: {
      type: String,
      required: false,
      default: '256px'
    },
    /**
     * Chart data array
     * [{
     *  color: String,
     *  value: Number,
     *  label: String
     * }]
     */
    data: {
      type: Array,
      required: false,
      default: () => []
    },
    /**
     * Toggle the chart legend
     */
    legend: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Optional chart title
     */
    title: {
      type: String,
      required: false
    },
    /**
     * Toggle donut mode
     */
    donut: {
      type: Boolean,
      required: false
    },
    /**
     * Toggle the chart drop shadow
     */
    flat: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    /**
     * Create the gradients for the segments
     * @computed segments
     * @return {string}
     */
    segments () {
      let gradient = 0
      let styles = this.data.map(
        segment => `${segment.color} 0 ${(gradient += this.slice(segment.value))}%`
      )
      return `conic-gradient(${styles.join(',')})`
    }
  },
  mounted () {
    this.onMounted()
  },
  methods: {
    /**
     * Mounted handler
     * @method onMounted
     * @return {void}
     */
    onMounted () {
      const noColor = 'rgba(0, 0, 0, 0)'
      const documentColor = this.getNodeCssPropertyValue()
      let parentBgColor = this.getNodeCssPropertyValue(this.$el.parentNode)
      this.setChartTotal()
      if (parentBgColor === noColor) {
        parentBgColor = documentColor === noColor ? '#fff' : documentColor
      }
      this.parentBgColor = parentBgColor
    },
    /**
     * Return chart series slice
     * @method slice
     * @param {number} value [value=0]
     * @return {number}
     */
    slice (value = 0) {
      return this.total === 0 ? 0 : Math.round(value * 100 / this.total)
    },
    /**
     * Get chart totals
     * @method setChartTotal
     * @return {void}
     */
    setChartTotal () {
      this.data.forEach(bar => {
        this.total = this.total + bar.value
      })
    },
    /**
     * Create a label out of the item.label and item.value
     * @method label
     * @param {object} item
     * @return {string}
     */
    label (item = null) {
      if (item) {
        return `${item.label} (${item.value})`
      }
    },
    /**
     * Get a computed CSS property value from an element
     * @method getNodeCssPropertyValue
     * @param {Element} node [node=document.body]
     * @param {string} property [property='background-color']
     * @return {string}
     */
    getNodeCssPropertyValue (node = document.body, property = 'background-color') {
      return window.getComputedStyle(node, null).getPropertyValue(property)
    }
  }
}
</script>
<style>
.vc-piechart,
.vc-piechart-container,
.vc-piechart span:first-child,
.vc-piechart .vc-piechart-container .vc-piechart-donut
{
  border-radius: 100%;
}

.vc-piechart,
.vc-piechart *
{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vc-piechart li,
.vc-piechart span
{
  display: inline-block;
  vertical-align: middle;
}

.vc-piechart ul,
.vc-piechart .vc-piechart-title
{
  text-align: center;
  font-size: .8em;
}

.vc-piechart:not(.vc-piechart-flat) .vc-piechart-container
{
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2),
    0 4px 5px 0 rgba(0, 0, 0, .14),
    0 1px 10px 0 rgba(0, 0, 0, .12);
}

.vc-piechart:not(.vc-piechart-flat) .vc-piechart-container .vc-piechart-donut
{
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2) inset,
    0 4px 5px 0 rgba(0, 0, 0, .14) inset,
    0 1px 10px 0 rgba(0, 0, 0, .12) inset;
}

.vc-piechart .vc-piechart-container
{
  position: relative;
}

.vc-piechart ul
{
  margin: 1em 0 0;
}

.vc-piechart .vc-piechart-container .vc-piechart-donut
{
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vc-piechart
{
  user-select: none;
  display: block;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #303030;
}

.vc-piechart .vc-piechart-title
{
  font-weight: 500;
  font-size: 1em;
  line-height: 1.5em;
}

.vc-piechart li
{
  padding: .2em;
}

.vc-piechart span:first-child
{
  width: .85em;
  height: .85em;
  margin: 0 .2em 0 0;
}
</style>
