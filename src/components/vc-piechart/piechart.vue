<template>
  <div :class="[name]" :id="id" v-if="series.length">
    <div :class="[`${name}-container`]"></div>
    <vc-style>
    #{{ id }},
    #{{ id }} .{{ name }}-container {
      width: {{ size }};
      height: {{ size }};
    }

    #{{ id }} .{{ name }}-container {
      background: {{ segments }};
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
      id: `vc-piechart-${uuid()}`
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
    }
  }
}
</script>
<style>
.vc-piechart,
.vc-piechart-container
{
  border-radius: 100%;
}

.vc-piechart
{
  user-select: none;
  display: block;
}

.vc-piechart
{
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2),
    0 4px 5px 0 rgba(0, 0, 0, .14),
    0 1px 10px 0 rgba(0, 0, 0, .12);
}
</style>
