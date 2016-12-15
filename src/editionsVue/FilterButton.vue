<template>
<button
  class="btn" v-bind:class="{ 'btn-active': isActive }"
  @click="filter
">
  <slot></slot>
</button>
</template>

<script>
import Events from './Events.vue';
import './button.css';

export default {

  props: ['type', 'currentType'],

  computed: {
    isActive() {
      return this.type === this.currentType;
    }
  },

  methods: {
    filter() {
      Events.$emit('filterChange', this.type);
    }
  }
}
</script>
