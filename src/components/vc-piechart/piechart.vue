<template>
  <div :class="[name]" :id="id" v-if="series.length">
    <div :class="[`${name}-title`]" v-html="title" v-if="title" />
    <div :class="[`${name}-container`]">
      <div :class="[`${name}-donut`]" v-if="donut" />
    </div>
    <ul v-if="legend">
      <li v-for="(item, index) in series" :key="index">
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
      background: {{ parentBgColor }}
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
      name: 'vc-piechart',
      id: `vc-piechart-${uuid()}`,
      parentBgColor: null
    }
  },
  computed: {
    segments () {
      let gradient = 0
      let styles = this.series.map(
        segment => `${segment.color} 0 ${(gradient += segment.value)}%`
      )
      return `conic-gradient(${styles.join(',')})`
    }
  },
  mounted () {
    const noColor = 'rgba(0, 0, 0, 0)'
    const documentColor = this.getBgColor(document.body)
    let parentBgColor = this.getBgColor(this.$el.parentNode)
    if (parentBgColor === noColor) {
      parentBgColor = documentColor === noColor ? '#fff' : documentColor
    }
    this.parentBgColor = parentBgColor
  },
  methods: {
    label (item) {
      return `${item.label} (${item.value})`
    },
    getBgColor (node) {
      return window.getComputedStyle(node, null).getPropertyValue('background-color')
    }
  },
  props: {
    size: {
      type: String,
      required: false,
      default: '256px'
    },
    series: {
      type: Array,
      required: false,
      default: () => []
    },
    legend: {
      type: Boolean,
      required: false,
      default: true
    },
    title: {
      type: String,
      required: false
    },
    donut: {
      type: Boolean,
      required: false
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

.vc-piechart .vc-piechart-container
{
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2),
    0 4px 5px 0 rgba(0, 0, 0, .14),
    0 1px 10px 0 rgba(0, 0, 0, .12);
  position: relative;
}

.vc-piechart .vc-piechart-container .vc-piechart-donut
{
  width: 40%;
  height: 40%;
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2) inset,
    0 4px 5px 0 rgba(0, 0, 0, .14) inset,
    0 1px 10px 0 rgba(0, 0, 0, .12) inset;
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
